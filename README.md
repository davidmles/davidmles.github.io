# Running the site in development mode

## Adapting the Gemfile

Open the Gemfile and to these changes:
- Uncomment the jekyll gem
- Comment out the github-pages gem

Run `bundle install`.

## Running the project

Open two terminal tabs, and run the following commands:

- The Tailwind CSS compiler: `npm run watch`
- The Jekyll server: `bundle exec jekyll serve --livereload`
