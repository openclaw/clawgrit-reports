# OpenClaw Source Performance

Generated: 2026-08-01T14:06:00.564Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5874.2ms | 5891.4ms | 5874.0ms | 2888.0ms | 2954.3ms | 209.5ms | 1044.7MB | 1.362 |
| skipChannels | gateway, skip channels | 2941.1ms | 2946.6ms | 2940.7ms | 2885.9ms | 2893.7ms | 211.2ms | 968.4MB | 1.367 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2727.3ms | 2997.4ms | 2723.9ms | 2631.2ms | 2645.3ms | 205.0ms | 998.8MB | 1.479 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3309.2ms | 3395.3ms | 3309.0ms | 2660.4ms | 2675.1ms | 210.9ms | 930.5MB | 1.295 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5531.4ms | 6547.6ms | 5529.5ms | 5419.0ms | 5426.4ms | 213.1ms | 963.2MB | 1.410 |
| oneInternalHook | gateway, one configured internal hook | 4244.4ms | 4252.8ms | 4243.9ms | 4183.9ms | 4196.6ms | 213.9ms | 912.3MB | 1.414 |
| allInternalHooks | gateway, all internal hooks | 4284.8ms | 4323.0ms | 4280.7ms | 4224.7ms | 4237.8ms | 217.0ms | 883.0MB | 1.404 |
| fiftyPlugins | gateway, 50 manifest plugins | 3733.1ms | 3759.5ms | 3732.9ms | 2890.3ms | 2934.1ms | 210.8ms | 1014.1MB | 1.349 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3246.6ms | 3280.6ms | 3245.8ms | 2718.5ms | 2771.7ms | 209.7ms | 1005.0MB | 1.542 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| acpx | 578.0MB | 532.1MB | ok |
| google-meet | 572.4MB | 526.4MB | ok |
| opencode | 563.3MB | 517.4MB | ok |
| migrate-hermes | 536.6MB | 490.6MB | ok |
| openai | 535.8MB | 489.8MB | ok |
| codex | 533.9MB | 487.9MB | ok |
| active-memory | 528.8MB | 482.8MB | ok |
| voice-call | 528.2MB | 482.2MB | ok |
| anthropic | 526.4MB | 480.4MB | ok |
| memory-lancedb | 514.2MB | 468.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks | 2727.4ms | 2783.0ms |
| default | runtime.post-attach | 428.6ms | 475.2ms |
| default | plugins.bootstrap | 385.6ms | 387.2ms |
| default | plugins.runtime-post-bind | 340.3ms | 395.3ms |
| default | plugins.gateway-load.loadMs | 325.2ms | 365.0ms |
| skipChannels | plugins.bootstrap | 383.7ms | 391.0ms |
| skipChannels | runtime.post-attach | 366.6ms | 376.6ms |
| skipChannels | plugins.runtime-post-bind | 342.4ms | 358.9ms |
| skipChannels | plugins.gateway-load.loadMs | 326.3ms | 337.5ms |
| skipChannels | cli.main.gateway-run-select-environment | 279.9ms | 284.5ms |
| preparedRuntimeCatalogStall | plugins.bootstrap | 366.2ms | 368.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 296.8ms | 300.8ms |
| preparedRuntimeCatalogStall | post-ready.gateway-data.plugins | 178.6ms | 178.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 110.8ms | 111.3ms |
| preparedRuntimeCatalogStall | cli.main.dotenv | 106.9ms | 109.9ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 414.7ms | 423.7ms |
| preparedRuntimeScaleOne | plugins.bootstrap | 364.4ms | 368.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 300.5ms | 300.8ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 178.0ms | 181.5ms |
| preparedRuntimeScaleOne | sidecars.model-runtime-build.workspaceFactsMs | 173.4ms | 176.9ms |
| preparedRuntimeScaleMany | plugins.bootstrap | 3142.9ms | 3158.0ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 587.0ms | 590.8ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 580.3ms | 581.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 305.4ms | 308.1ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.configuredProjectionMs | 258.0ms | 261.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2560.4ms | 2571.0ms |
| oneInternalHook | plugins.bootstrap | 357.2ms | 358.1ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 285.3ms | 287.9ms |
| oneInternalHook | runtime.post-attach | 245.5ms | 252.2ms |
| oneInternalHook | plugins.runtime-post-bind | 226.5ms | 227.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2590.4ms | 2619.4ms |
| allInternalHooks | plugins.bootstrap | 353.8ms | 358.8ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 286.8ms | 292.7ms |
| allInternalHooks | runtime.post-attach | 244.2ms | 246.1ms |
| allInternalHooks | plugins.runtime-post-bind | 223.0ms | 227.5ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 477.2ms | 497.7ms |
| fiftyPlugins | plugins.bootstrap | 444.1ms | 449.8ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 304.1ms | 304.7ms |
| fiftyPlugins | sidecars.session-locks | 265.8ms | 267.0ms |
| fiftyPlugins | runtime.post-attach | 238.2ms | 251.4ms |
| fiftyStartupLazyPlugins | plugins.bootstrap | 437.9ms | 442.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 307.9ms | 311.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks | 264.5ms | 272.6ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins | 181.6ms | 191.9ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins | 166.8ms | 169.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11206.0ms | 0.000 | 2743.8MB | 1106.0MB | -1637.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10768.0ms | 0.186 | 1092.7MB | 1113.6MB | 20.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10794.0ms | 0.185 | 1098.0MB | 1155.3MB | 57.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 654.6ms | 656.0ms | 187.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 836.3ms | 862.3ms | 187.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 132.7ms |

## Observations

No data.

