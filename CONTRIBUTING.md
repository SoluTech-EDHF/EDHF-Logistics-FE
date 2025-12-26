# Contributing to EDHF Logistics

Thank you for considering contributing to EDHF Logistics!  
We welcome all kinds of contributions, including bug reports, feature requests, and code improvements.

---

## Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Code Contributions](#code-contributions)
- [Development Workflow](#development-workflow)
- [Branch Naming Rules](#branch-naming-rules)
- [Commit Message Rules](#commit-message-rules)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

---

## Getting Started

1. Clone the repository:
      git clone https://github.com/SoluTech-EDHF/EDHF-Logistics-FE.git

2. Navigate to the project directory:
      cd EDHF-Logistics-FE
   
3. Install dependencies:
      npm install
   
4. Start the local server:
      npm run dev
   

---

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue on GitHub Issues and include:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Logs or screenshots

### Suggesting Features

If you have a feature idea, open an issue and describe:

- What the feature should do
- Why it is useful
- How you imagine it working

### Code Contributions

All code contributions should be done on a feature branch in your local clone and submitted via a pull request to the upstream repository.

---

## Development Workflow

1. Create a new branch for your work:
      git checkout -b feat/EDHFLOG-2145-your-feature-name
   

---

## Branch Naming Rules

Branch names should follow this structure:

<prefix>/<TICKET-ID>-<description>


### Allowed Prefixes

- feat/ — new feature
- fix/ — bug fix
- refactor/ — code restructuring
- chore/ — routine tasks
- docs/ — documentation changes

### Rules

- Include ticket or issue number when available (e.g., EDHFLOG-2145)
- Description should be lowercase and short
- If no ticket exists, omit the ticket number

### Examples

feat/EDHFLOG-1234-create-login-page
fix/EDHFLOG-5678-profile-update-bug
chore/remove-unused-variables


---

## Commit Message Rules

Commit messages follow this style:

type: commit message


Or, when including a ticket:

type(TICKET-ID): commit message


### Allowed Types

- feat
- fix
- refactor
- chore
- docs
-

### Examples

feat: add signup form
fix(EDHFLOG-1234): resolve login crash
refactor: simplify formData state logic


### Important

Use imperative tense:

- ✔️ "add login validation"
- ❌ "added login validation"
- ❌ "I added login validation"

---

## Submitting Pull Requests

1. Make sure your branch is up to date with the `dev` branch:
            git checkout dev
      git pull origin dev
      git checkout <your-branch>
      git rebase dev
   

2. Sync your fork frequently with upstream to avoid conflicts.

3. Run tests before submitting:
      npm test
   

4. Open a pull request to the upstream repository.

5. In your PR description, include:
   - What you changed
   - Why you changed it

---

## Code of Conduct

This project follows the Contributor Covenant Code of Conduct (https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

Please report unacceptable behavior at:

email@example.com


---

## License

By contributing, you agree that your contributions will be licensed under the:

Apache License