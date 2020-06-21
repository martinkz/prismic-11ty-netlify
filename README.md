# Prismic-11ty-Netlify Minimalist Boilerplate / Demo
 
This is a work-in-progress minimal boilerplate that uses [Prismic CMS](https://prismic.io), [11ty static site generator](https://www.11ty.dev) and is hosted on [Netlify](https://netlify.com). It can be deployed and used for free within the free tiers offered by those services.

This boilerplace does not include any build tools for compiling/minifying your SASS/JavaScript, I want to keep it tool-agnostic for now, so you'll need to add these on top yourself.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/martinkz/1prismic-11ty-netlify)


## How to set up the demo

You'll need a free [Netlify](https://netlify.com) and [prismic.io](https://prismic.io) accounts. Set these up first.


## Set up Prismic repository

1. In your Prismic account, create a new repository. 
2. In your repository, create 2 custom types called Homepage and Page. Add a Title field (API ID 'title') to Homepage and a UID field to Page (API ID 'uid'). You can later change or remove these custom types and fields. This is just to get the demo site to work. The UID field on the pages is used as a slug (e.g. if you have a page with UID 'about', the page will be accessible at the yoursite.com/about/ URL).
3. Create a Homepage and a couple Pages. This is the data 11ty will use to build your site.
4. Find your API endpoint in your repository settings, you will need it when you're setting up Netlify and your local project.

![API Endpoint](https://raw.githubusercontent.com/martinkz/imagebank/master/prismic-11ty-netlify/netlify-setup-3.png)


## Set up a local project

1. Clone this repository to your local machine.
2. Open terminal and run "npm install" to install all dependencies.
3. Rename the ".env.example" file (located in the main directory) to ".env" and edit the file to add your Prismic repository API endpoint.
4. Run "npm run dev" to start a development server or "npm run build" to build your site.


## Deploy to Netlify

1. Upload the local repository you set up to Github (or fork this one).
2. In Netlify, use the 'New site from Git' button and choose the forked repository you just created.
3. When you get to deploy & build settings, you need to add your Prismic repository API endpoint as an environmental variable named PRISMIC_REPO_URL.

![Show advanced](https://raw.githubusercontent.com/martinkz/imagebank/master/prismic-11ty-netlify/netlify-setup-1.png)
![Add environmental variable](https://raw.githubusercontent.com/martinkz/imagebank/master/prismic-11ty-netlify/netlify-setup-2.png)

4. Deploy the site!


## Set up a Netlify build hook and a Prismic webhook to trigger it

We need to set up a webhook so that when you save a Prismic document, this triggers a Netlify build.

1. Go to your Netlify site settings and add a webhook under Build & deploy, you'll get a URL that triggers the webhook:
![Add Netlify webhook](https://raw.githubusercontent.com/martinkz/imagebank/master/prismic-11ty-netlify/netlify-setup-4.png)

2. Go to your Prismic repository setting and under webhook add the Netlify webhook URL:
![Add Prismic webhook](https://raw.githubusercontent.com/martinkz/imagebank/master/prismic-11ty-netlify/netlify-setup-5.png)

3. Done!



