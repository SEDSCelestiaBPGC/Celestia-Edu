# SEDS Celestia Edu

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

```
docker build -t educelestia .
docker build -t registry.heroku.com/educelestia/web .
docker push registry.heroku.com/educelestia/web
heroku container:release web -a educelestia
```