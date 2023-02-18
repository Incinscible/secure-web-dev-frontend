# Install dependencies

Install dependencies with `npm install` (or `pnpm install` or `yarn`)

## Back-end

I used the backend of the teacher but I changed a line in the user services, in the function createOne :
```bash
const saneData = { ...userData, role: "user" };
```
become
```bash
const saneData = { ...userData, role: userData.role };
```

## User stories

US1 : ✔️

US2 : ✔️

US3 : ✔️

US4 : ✔️

US5 : ✔️

US6 : ✔️

## Run the front-end

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Créer un user admin

Le mot de passe secret à rajouter pour créer un compte admin après avoir changé le bout code dans le back-end est "yolegang"
