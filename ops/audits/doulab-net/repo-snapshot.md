# Repo Snapshot

- Repo: doulab-site
- Git status: `## main...origin/main`
- Branch: `main`
- Latest commit: `b7fdb00de0c28c556c8b7308705ef2c12fe77751`
- Node: `v22.14.0`
- NPM: `11.5.2`

## Top-level folders
- `_import`
- `.docusaurus`
- `.docusaurus.bak-71cb5e508d61406daf92cba9d355cf7c`
- `.git`
- `.github`
- `.husky`
- `.vs`
- `blog`
- `build`
- `build-ci-insights`
- `build-ci-insights-2`
- `build-ci-insights-readd`
- `build-dry`
- `docs`
- `node_modules`
- `scripts`
- `src`
- `static`

## Docs/content roots
- `docs/`
- `blog/`
- `src/pages/`
- `static/`
- `i18n/` (not present)

## Key config files found
- `docusaurus.config.ts`
- `sidebars.ts`
- `package.json`

## build output (failed - STOP)
```text
> doulab.site@0.7.1 prebuild
> node scripts/strip-bom.cjs


> doulab.site@0.7.1 build
> docusaurus build

[WARNING] The `siteConfig.onBrokenMarkdownLinks` config option is deprecated and will be removed in Docusaurus v4.
Please migrate and move this option to `siteConfig.markdown.hooks.onBrokenMarkdownLinks` instead.
[INFO] [en] Creating an optimized production build...
[WARNING] The `siteConfig.onBrokenMarkdownLinks` config option is deprecated and will be removed in Docusaurus v4.
Please migrate and move this option to `siteConfig.markdown.hooks.onBrokenMarkdownLinks` instead.
[baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
node:events:496
      throw er; // Unhandled 'error' event
      ^

Error: EPIPE: broken pipe, write
    at Socket._write (node:internal/net:63:18)
    at writeOrBuffer (node:internal/streams/writable:572:12)
    at _write (node:internal/streams/writable:501:10)
    at Writable.write (node:internal/streams/writable:510:10)
    at writeStream (C:\HB9HJU_BkSSD\Dropbox\LS\Projects\INFORMATIK-LLC\Projects\Doulab\doulab-site\node_modules\consola\dist\shared\consola.DCGIlDNP.cjs:14:16)
    at FancyReporter.log (C:\HB9HJU_BkSSD\Dropbox\LS\Projects\INFORMATIK-LLC\Projects\Doulab\doulab-site\node_modules\consola\dist\shared\consola.DCGIlDNP.cjs:67:12)
    at Consola._log (C:\HB9HJU_BkSSD\Dropbox\LS\Projects\INFORMATIK-LLC\Projects\Doulab\doulab-site\node_modules\consola\dist\core.cjs:485:16)
    at resolveLog (C:\HB9HJU_BkSSD\Dropbox\LS\Projects\INFORMATIK-LLC\Projects\Doulab\doulab-site\node_modules\consola\dist\core.cjs:453:14)
    at Consola._logFn (C:\HB9HJU_BkSSD\Dropbox\LS\Projects\INFORMATIK-LLC\Projects\Doulab\doulab-site\node_modules\consola\dist\core.cjs:481:5)
    at Consola.info (C:\HB9HJU_BkSSD\Dropbox\LS\Projects\INFORMATIK-LLC\Projects\Doulab\doulab-site\node_modules\consola\dist\core.cjs:410:19)
Emitted 'error' event on Socket instance at:
    at emitErrorNT (node:internal/streams/destroy:170:8)
    at emitErrorCloseNT (node:internal/streams/destroy:129:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
  errno: -4047,
  syscall: 'write',
  code: 'EPIPE'
}

Node.js v22.14.0
```

# Snapshot (Step 0)

## git status -sb
```text
## main...origin/main
?? ops/
```

## git rev-parse --abbrev-ref HEAD
```text
main
```

## git rev-parse HEAD
```text
b7fdb00de0c28c556c8b7308705ef2c12fe77751
```

## node -v ; npm -v
```text
v22.14.0
11.5.2
```

## npm config get fund ; npm config get audit
```text
true
true
```

## echo $env:CI
```text

```

## Env scan (NODE|NPM|CI|CF|CLOUDFLARE)
```text
[CODEX_MANAGED_BY_NPM, 1]
[NVM_SYMLINK, C:\nvm4w\nodejs]
[OneDrive, D:\Dropbox\LS\Projects\OGTIC\OneDrive - Oficina Gubernamental de Tecnologi{ de la Informaci— y Comunicaci— (OGTIC)]
[OneDriveCommercial, D:\Dropbox\LS\Projects\OGTIC\OneDrive - Oficina Gubernamental de Tecnologi{ de la Informaci— y Comunicaci— (OGTIC)]
[PATH, C:\Program Files\PowerShell\7;C:\Users\luiss\AppData\Local\Temp\.tmpUB3hnG;C:\Users\luiss\AppData\Local\nvm\v20.16.0\node_modules\@openai\codex\vendor\x86_64-pc-windows-msvc\path;C:\Python313\Scripts\;C:\Python313\;C:\Program Files\Python311\Scripts\;C:\Program Files\Python311\;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\ProgramData\chocolatey\bin;C:\Program Files\PuTTY\;C:\HB9HJU_BkSSD\Dropbox\Documents\Personal\radioAficionado\Data\js8call\bin;C:\Program Files\dotnet\;C:\Program Files (x86)\Go\bin;C:\Program Files\Microsoft SQL Server\150\Tools\Binn\;C:\Program Files\Microsoft SQL Server\Client SDK\ODBC\170\Tools\Binn\;%NVM_HOME%;%NVM_SYMLINK%;C:\Program Files\nodejs\;C:\Program Files\PowerShell\7\;C:\Users\luiss\AppData\Local\Microsoft\WindowsApps;C:\Users\luiss\AppData\Local\GitHubDesktop\bin;C:\WSJT\wsjtx\bin;C:\Users\luiss\go\bin;C:\Users\luiss\AppData\Local\nvm;C:\nvm4w\nodejs;C:\Users\luiss\AppData\Local\Microsoft\WinGet\Packages\Schniz.fnm_Microsoft.Winget.Source_8wekyb3d8bbwe;C:\Users\luiss\AppData\Roaming\npm;C:\Users\luiss\.dotnet\tools;C:\Users\luiss\AppData\Local\Programs\Microsoft VS Code\bin]
```
