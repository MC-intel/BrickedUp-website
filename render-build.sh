#!/usr/bin/env bash
# Render build script

echo "==> Listing components directory:"
ls -la components/

echo "==> Installing dependencies..."
npm install --legacy-peer-deps

echo "==> Building Next.js..."
npm run build
