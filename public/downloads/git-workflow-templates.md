# Git Workflow Templates

## GitHub Flow
- Create a branch from `main`
- Commit changes locally
- Push to origin and open a pull request
- Review and merge after approval
- Deploy from `main`

## GitFlow
- Main branches: `main`, `develop`
- Feature branches: `feature/*`
- Releases: `release/*`
- Hotfixes: `hotfix/*`

### Example
```bash
git checkout -b feature/login
# work on feature
git push origin feature/login
```
