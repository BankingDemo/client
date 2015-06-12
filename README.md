# Development

If you also wish to run server functionality locally, install and run both Redis and MongoDB on your machine and then run the following from the top level of the project:

    fhc target [your-studio-domain].feedhenry.com
    fhc login your-studio-username your-studio-password
    fhc apps
    fhc local the-id-of-your-app
