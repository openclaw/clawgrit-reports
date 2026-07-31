# OpenClaw Source Performance

Generated: 2026-07-31T08:01:44.085Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5965.1ms | 6118.5ms | 5965.0ms | 2989.7ms | 3059.8ms | 211.7ms | 1046.4MB | 1.347 |
| skipChannels | gateway, skip channels | 2978.2ms | 3067.0ms | 2975.3ms | 2896.8ms | 2905.7ms | 211.3ms | 924.4MB | 1.354 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3041.1ms | 3042.4ms | 3041.1ms | 2665.2ms | 2678.5ms | 217.1ms | 882.9MB | 1.324 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3143.0ms | 3468.6ms | 3142.1ms | 2697.5ms | 2708.3ms | 214.5ms | 989.6MB | 1.441 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5981.3ms | 6795.1ms | 5809.2ms | 5681.4ms | 5694.0ms | 219.4ms | 903.3MB | 1.376 |
| oneInternalHook | gateway, one configured internal hook | 4565.6ms | 4766.2ms | 4566.2ms | 4507.3ms | 4515.7ms | 224.9ms | 887.9MB | 1.338 |
| allInternalHooks | gateway, all internal hooks | 4384.0ms | 4515.7ms | 4383.6ms | 4318.0ms | 4325.8ms | 220.6ms | 919.4MB | 1.376 |
| fiftyPlugins | gateway, 50 manifest plugins | 3820.7ms | 3927.7ms | 3819.7ms | 3035.8ms | 3084.9ms | 222.8ms | 926.7MB | 1.379 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3571.5ms | 3734.3ms | 3568.7ms | 2969.3ms | 3028.2ms | 226.8ms | 995.5MB | 1.435 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 578.3MB | 532.3MB | ok |
| voice-call | 577.2MB | 531.3MB | ok |
| opencode | 559.4MB | 513.4MB | ok |
| google-meet | 542.9MB | 496.9MB | ok |
| migrate-hermes | 540.1MB | 494.2MB | ok |
| acpx | 536.8MB | 490.8MB | ok |
| memory-lancedb | 534.8MB | 488.8MB | ok |
| openai | 532.2MB | 486.3MB | ok |
| codex | 519.1MB | 473.1MB | ok |
| anthropic | 518.2MB | 472.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks | 2820.7ms | 2848.4ms |
| default | runtime.post-attach | 471.5ms | 509.4ms |
| default | plugins.bootstrap | 396.3ms | 400.0ms |
| default | plugins.runtime-post-bind | 382.6ms | 388.8ms |
| default | plugins.gateway-load.loadMs | 360.4ms | 362.6ms |
| skipChannels | plugins.bootstrap | 389.0ms | 391.3ms |
| skipChannels | runtime.post-attach | 378.0ms | 382.0ms |
| skipChannels | plugins.runtime-post-bind | 349.5ms | 356.5ms |
| skipChannels | plugins.gateway-load.loadMs | 333.4ms | 339.2ms |
| skipChannels | cli.main.gateway-run-select-environment | 280.5ms | 295.3ms |
| preparedRuntimeCatalogStall | plugins.bootstrap | 356.3ms | 374.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 292.2ms | 307.8ms |
| preparedRuntimeCatalogStall | post-ready.gateway-data.plugins | 186.8ms | 194.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 113.1ms | 115.3ms |
| preparedRuntimeCatalogStall | cli.main.dotenv | 110.9ms | 114.2ms |
| preparedRuntimeScaleOne | plugins.bootstrap | 360.6ms | 371.0ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 315.9ms | 421.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 301.0ms | 314.1ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 187.7ms | 192.3ms |
| preparedRuntimeScaleOne | sidecars.model-runtime-build.workspaceFactsMs | 182.9ms | 186.0ms |
| preparedRuntimeScaleMany | plugins.bootstrap | 3260.6ms | 3273.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 610.8ms | 633.3ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 599.5ms | 625.9ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 314.2ms | 327.3ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.configuredProjectionMs | 272.3ms | 292.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2782.0ms | 2855.9ms |
| oneInternalHook | plugins.bootstrap | 379.5ms | 403.9ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 298.8ms | 306.0ms |
| oneInternalHook | runtime.post-attach | 277.2ms | 296.5ms |
| oneInternalHook | plugins.runtime-post-bind | 250.1ms | 275.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2641.6ms | 2735.2ms |
| allInternalHooks | plugins.bootstrap | 355.3ms | 390.3ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 277.3ms | 307.9ms |
| allInternalHooks | runtime.post-attach | 254.1ms | 278.5ms |
| allInternalHooks | plugins.runtime-post-bind | 233.0ms | 256.5ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 483.7ms | 504.7ms |
| fiftyPlugins | plugins.bootstrap | 452.0ms | 468.8ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 325.2ms | 339.5ms |
| fiftyPlugins | sidecars.session-locks | 283.5ms | 588.1ms |
| fiftyPlugins | runtime.post-attach | 221.5ms | 252.8ms |
| fiftyStartupLazyPlugins | plugins.bootstrap | 472.3ms | 479.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 330.9ms | 374.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks | 290.3ms | 301.1ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins | 202.2ms | 215.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins | 183.4ms | 192.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12670.0ms | 0.000 | 2785.3MB | 1125.8MB | -1659.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11597.0ms | 0.172 | 1043.0MB | 1180.5MB | 137.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11910.0ms | 0.168 | 1110.7MB | 1127.4MB | 16.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 736.0ms | 771.7ms | 187.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1012.0ms | 1035.0ms | 187.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 163.6ms |

## Observations

No data.

