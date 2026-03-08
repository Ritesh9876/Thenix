# Thenix

Framework-agnostic async primitives with framework adapters.

## Packages

- `@thenix/core`: runtime-agnostic async state primitives
- `@thenix/react`: React adapter built on top of core

## Quick Start

```bash
pnpm install
pnpm build
pnpm test
```

## Development Commands

- `pnpm build`
- `pnpm typecheck`
- `pnpm test`
- `pnpm lint`
- `pnpm format`

## Releasing

This repository uses Changesets.

1. Create a changeset: `pnpm changeset`
2. Bump versions: `pnpm version-packages`
3. Publish: `pnpm release`
