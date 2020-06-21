const Prismic = require("prismic-javascript");
const dotenv = require("dotenv").config();

let webhookData = process.env.INCOMING_HOOK_BODY ? JSON.parse(process.env.INCOMING_HOOK_BODY) : undefined;

let prismicRef = webhookData ? webhookData.masterRef : undefined;

async function getPrismicData(ref) {
	let prismicRepoURL = process.env.PRISMIC_REPO_URL;

	if (!prismicRepoURL) {
		throw new Error("PRISMIC_REPO_URL environmental variable not found in Netlify settings or .env file.");
	}

	return Prismic.api(prismicRepoURL)
		.then(function (api) {
			// Query 100 documents only. For sites with more documents than this, the below query will have to be modified to fetch multiple pages
			return api.query("", { ref: ref, pageSize: 100 });
		})
		.then(
			function (response) {
				return response.results;
			},
			function (err) {
				console.log("Couldn't fetch Prismic data: ", err);
			}
		);
}

function bucketByType(data) {
	let dataByType = {};
	for (let item of data) {
		if (!dataByType[item.type]) dataByType[item.type] = [];
		dataByType[item.type].push(item);
	}
	return dataByType;
}

module.exports = async function () {
	let prismicData = await getPrismicData(prismicRef);
	return bucketByType(prismicData);
};
