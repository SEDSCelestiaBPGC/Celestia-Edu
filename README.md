# SEDS Celestia Edu

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install`), start a development server:

```bash
$ npm run dev
# or build
npm run build
```

## Building

```bash
$ docker build -t educelestia .
$ docker build -t registry.heroku.com/educelestia/web .
$ docker push registry.heroku.com/educelestia/web
$ heroku container:release web -a educelestia
```

## TODOs
- Transition from current to Atomic CSS system
- Standardise section styles for within courses
- Add youtube links to home page
- Add a build script such that meta is autoupdated