// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(__dirname, "../..");
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// // Below does not fix the issue
// config.resolver.sourceExts.push("mjs")
// config.resolver.sourceExts.push("cjs")

// // Below does not fix the issue
// const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts;
// config.resolver.sourceExts = process.env.RN_SRC_EXT
// ? [...process.env.RN_SRC_EXT.split(',').concat(defaultSourceExts), 'cjs', 'mjs']
// : [...defaultSourceExts, 'cjs', 'mjs'], 

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];

// 2. Let Metro know where to resolve packages, and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
