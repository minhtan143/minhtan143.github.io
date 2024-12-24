## Deployment

This project uses GitHub Actions for deployment. Follow the steps below to deploy the project to GitHub Pages:

1. Trigger the deployment workflow by dispatching a `repository_dispatch` event with the type `deploy-gh-pages`.
2. Ensure the payload contains the following fields:
   - `repository`: The repository name.
   - `version`: The tag version to deploy.
   - `assets`: The name of the asset file to deploy.

Example payload:
```json
{
  "event_type": "deploy-gh-pages",
  "client_payload": {
    "repository": "minhtan143.github.io",
    "version": "v1.0.0",
    "assets": "release.zip"
  }
}
```

3. The workflow will download the specified release, unzip the assets, and deploy the static files to GitHub Pages.