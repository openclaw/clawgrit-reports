# OpenClaw Source Performance

Generated: 2026-08-01T13:43:55.597Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5855.9ms | 5886.2ms | 5855.8ms | 2897.8ms | 2962.3ms | 211.8ms | 1036.9MB | 1.366 |
| skipChannels | gateway, skip channels | 2939.3ms | 2962.9ms | 2938.3ms | 2883.1ms | 2891.2ms | 209.9ms | 984.2MB | 1.363 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2748.3ms | 3006.2ms | 2748.3ms | 2657.8ms | 2667.4ms | 213.3ms | 920.5MB | 1.472 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3326.6ms | 3380.5ms | 3371.4ms | 2648.5ms | 2666.4ms | 215.0ms | 982.1MB | 1.483 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6616.7ms | 6619.1ms | 6613.8ms | 5490.9ms | 5501.5ms | 211.1ms | 953.6MB | 1.369 |
| oneInternalHook | gateway, one configured internal hook | 4320.4ms | 4320.9ms | 4319.8ms | 4261.3ms | 4269.3ms | 210.8ms | 897.0MB | 1.407 |
| allInternalHooks | gateway, all internal hooks | 4256.4ms | 4290.5ms | 4256.4ms | 4196.9ms | 4205.1ms | 213.2ms | 914.0MB | 1.420 |
| fiftyPlugins | gateway, 50 manifest plugins | 3553.8ms | 3795.4ms | 3517.0ms | 2946.8ms | 2988.8ms | 216.2ms | 996.7MB | 1.422 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3521.9ms | 3550.3ms | 3521.8ms | 2745.9ms | 2794.3ms | 216.2ms | 1008.9MB | 1.495 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| openai | 595.3MB | 549.2MB | ok |
| codex | 544.1MB | 498.0MB | ok |
| opencode | 541.4MB | 495.4MB | ok |
| anthropic | 540.1MB | 494.1MB | ok |
| acpx | 535.3MB | 489.2MB | ok |
| voice-call | 532.2MB | 486.1MB | ok |
| workboard | 530.3MB | 484.2MB | ok |
| google-meet | 521.6MB | 475.5MB | ok |
| memory-lancedb | 517.3MB | 471.3MB | ok |
| migrate-hermes | 512.2MB | 466.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks | 2789.6ms | 2810.5ms |
| default | runtime.post-attach | 435.2ms | 438.7ms |
| default | plugins.bootstrap | 386.4ms | 394.9ms |
| default | plugins.runtime-post-bind | 345.1ms | 353.9ms |
| default | plugins.gateway-load.loadMs | 324.7ms | 330.1ms |
| skipChannels | plugins.bootstrap | 382.4ms | 385.9ms |
| skipChannels | runtime.post-attach | 365.8ms | 382.8ms |
| skipChannels | plugins.runtime-post-bind | 340.8ms | 364.4ms |
| skipChannels | plugins.gateway-load.loadMs | 322.5ms | 339.8ms |
| skipChannels | cli.main.gateway-run-select-environment | 282.7ms | 286.3ms |
| preparedRuntimeCatalogStall | plugins.bootstrap | 354.3ms | 374.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 302.9ms | 303.4ms |
| preparedRuntimeCatalogStall | post-ready.gateway-data.plugins | 175.2ms | 175.2ms |
| preparedRuntimeCatalogStall | cli.main.dotenv | 109.5ms | 112.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 108.3ms | 114.8ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 423.0ms | 436.5ms |
| preparedRuntimeScaleOne | plugins.bootstrap | 360.0ms | 363.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 302.4ms | 308.9ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 180.9ms | 183.2ms |
| preparedRuntimeScaleOne | sidecars.model-runtime-build.workspaceFactsMs | 175.8ms | 176.1ms |
| preparedRuntimeScaleMany | plugins.bootstrap | 3160.1ms | 3205.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 593.2ms | 610.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 586.9ms | 603.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 301.6ms | 314.7ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.configuredProjectionMs | 265.4ms | 280.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2618.6ms | 2622.0ms |
| oneInternalHook | plugins.bootstrap | 350.1ms | 372.7ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 286.0ms | 300.6ms |
| oneInternalHook | runtime.post-attach | 240.7ms | 252.9ms |
| oneInternalHook | plugins.runtime-post-bind | 222.5ms | 233.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2557.3ms | 2594.7ms |
| allInternalHooks | plugins.bootstrap | 355.0ms | 360.4ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 288.5ms | 290.0ms |
| allInternalHooks | runtime.post-attach | 254.5ms | 259.9ms |
| allInternalHooks | plugins.runtime-post-bind | 230.2ms | 235.9ms |
| fiftyPlugins | plugins.bootstrap | 439.2ms | 453.3ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 317.1ms | 323.6ms |
| fiftyPlugins | sidecars.session-locks | 276.9ms | 541.8ms |
| fiftyPlugins | runtime.post-attach | 223.0ms | 225.8ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 213.5ms | 453.7ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins | 470.7ms | 493.8ms |
| fiftyStartupLazyPlugins | plugins.bootstrap | 442.1ms | 447.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 312.4ms | 314.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks | 267.6ms | 277.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins | 175.8ms | 182.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11308.0ms | 0.000 | 2776.9MB | 1207.0MB | -1569.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11176.0ms | 0.179 | 1101.3MB | 1119.5MB | 18.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10879.0ms | 0.184 | 1106.3MB | 1137.5MB | 31.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 632.2ms | 637.6ms | 187.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 834.6ms | 836.6ms | 187.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 136.5ms |

## Observations

No data.

