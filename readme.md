# Makerkit Email Starter

A live preview right in your browser so you don't need to keep sending real emails during development.

## Getting Started

First, install the dependencies:

```sh
pnpm install
```

Then, run the development server:

```sh
pnpm run dev
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

Please complete the `.env` file with your own values.

```bash
PRODUCT_NAME=Makerkit
DISPLAY_LOGO=false
```

1. PRODUCT_NAME: The name of your product
2. DISPLAY_LOGO: Whether to display the logo in the email.

### Building the emails

Please run the following command to build the emails:

```sh
pnpm run export
```

The emails will be generated in the `out` folder. You can then copy the HTML and paste them into the Supabase settings or into your Makerkit project.

### Replacing emails in Makerkit

Build the emails and copy the HTML content. 

```
pnpm run export
```

This will generate the HTML content in the `out` folder.

Then, go to your Makerkit project and paste the files at `apps/web/supabase/templates`. Do overwrite the existing files.

Now, stop Supabase and start it again:

```
pnpm --filter web supabase stop
pnpm --filter web supabase start
```