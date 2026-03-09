#!/usr/bin/env bash
set -euo pipefail

APP_HOME="${APP_HOME:-$HOME/fpom-landing}"
WEB_ROOT="${WEB_ROOT:-$HOME/www/fpom.app}"

if [[ ! -d "$APP_HOME/.git" ]]; then
  echo "Landing checkout not found: $APP_HOME" >&2
  exit 1
fi

cd "$APP_HOME"
npm ci
npm run build

install -d "$WEB_ROOT"
rsync -a --delete "$APP_HOME/dist/" "$WEB_ROOT/"
