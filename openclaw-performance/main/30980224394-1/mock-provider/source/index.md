# OpenClaw Source Performance

Generated: 2026-08-05T06:14:57.327Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3953.5ms | 4313.2ms | 3953.4ms | 3498.4ms | 3818.1ms | 127.8ms | 968.2MB | 1.559 |
| skipChannels | gateway, skip channels | 3998.8ms | 4710.5ms | 3998.7ms | 3540.1ms | 3560.5ms | 123.7ms | 971.1MB | 1.563 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3255.4ms | 3284.2ms | 3255.2ms | 3019.1ms | 3030.7ms | 112.0ms | 992.2MB | 1.543 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3509.0ms | 3517.9ms | 3508.8ms | 3162.8ms | 3175.0ms | 127.0ms | 1009.1MB | 1.475 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 3524.6ms | 3559.5ms | 3524.4ms | 2909.7ms | 2922.5ms | 112.3ms | 1004.0MB | 1.430 |
| oneInternalHook | gateway, one configured internal hook | 3701.0ms | 3740.8ms | 3700.8ms | 3234.1ms | 3250.5ms | 117.1ms | 966.0MB | 1.360 |
| allInternalHooks | gateway, all internal hooks | 3715.2ms | 3727.6ms | 3711.1ms | 3260.3ms | 3269.4ms | 120.5ms | 976.3MB | 1.352 |
| fiftyPlugins | gateway, 50 manifest plugins | 4304.7ms | 4393.4ms | 4304.5ms | 3436.6ms | 3504.7ms | 118.3ms | 1001.2MB | 1.453 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4196.1ms | 4237.5ms | 4195.9ms | 3358.1ms | 3428.3ms | 126.9ms | 1028.9MB | 1.516 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 967.2MB | 968.2MB | +1.0MB (+0.1%) | -69.5MB (-13.6%) | stable |
| gateway boot | skipChannels | 894.6MB | 971.1MB | +76.5MB (+8.6%) | -86.2MB (-22.3%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 836.3MB | 992.2MB | +155.9MB (+18.6%) | +334.8MB (+113.8%) | stable |
| gateway boot | preparedRuntimeScaleOne | 834.1MB | 1009.1MB | +175.0MB (+21.0%) | +292.3MB (+80.5%) | watch |
| gateway boot | preparedRuntimeScaleMany | 1022.3MB | 1004.0MB | -18.3MB (-1.8%) | +315.8MB (+98.6%) | stable |
| gateway boot | oneInternalHook | 935.3MB | 966.0MB | +30.7MB (+3.3%) | -127.9MB (-28.9%) | stable |
| gateway boot | allInternalHooks | 928.2MB | 976.3MB | +48.0MB (+5.2%) | -133.5MB (-30.2%) | stable |
| gateway boot | fiftyPlugins | 853.9MB | 1001.2MB | +147.2MB (+17.2%) | -179.3MB (-46.1%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 963.1MB | 1028.9MB | +65.7MB (+6.8%) | -139.1MB (-37.2%) | stable |
| cli | gatewayHealthJsonConnected | 187.0MB | 187.0MB | -0.1MB (-0.0%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 187.3MB | 187.0MB | -0.3MB (-0.2%) | n/a | stable |
| cli | configGetGatewayPort | 187.7MB | 187.2MB | -0.5MB (-0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | -139.3MB | -276.6MB | -137.4MB (+98.6%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 87 bundled plugins | 702.5MB | 656.3MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 579.0MB | 532.8MB | ok |
| openai | 575.6MB | 529.3MB | ok |
| anthropic | 572.2MB | 525.9MB | ok |
| google-meet | 567.8MB | 521.6MB | ok |
| memory-lancedb | 543.9MB | 497.7MB | ok |
| acpx | 543.6MB | 497.3MB | ok |
| migrate-hermes | 541.6MB | 495.3MB | ok |
| llm-task | 538.4MB | 492.1MB | ok |
| voice-call | 531.1MB | 484.9MB | ok |
| codex | 515.5MB | 469.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 700.4ms | 788.7ms |
| default | gateway.ws-imports | 575.0ms | 747.7ms |
| default | cli.main.gateway-run-select-environment | 488.5ms | 489.6ms |
| default | cli.main.gateway-run-bootstrap | 392.5ms | 403.2ms |
| default | plugins.runtime-post-bind | 350.0ms | 369.2ms |
| skipChannels | gateway.ws-imports | 557.1ms | 682.6ms |
| skipChannels | cli.main.gateway-run-select-environment | 467.4ms | 533.7ms |
| skipChannels | cli.main.gateway-run-bootstrap | 406.3ms | 505.6ms |
| skipChannels | runtime.post-attach | 342.6ms | 346.1ms |
| skipChannels | plugins.runtime-post-bind | 299.9ms | 311.2ms |
| preparedRuntimeCatalogStall | gateway.ws-imports | 515.8ms | 520.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 459.1ms | 460.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 414.3ms | 414.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 173.0ms | 173.8ms |
| preparedRuntimeCatalogStall | gateway.server-impl-import | 122.8ms | 126.3ms |
| preparedRuntimeScaleOne | gateway.ws-imports | 519.3ms | 535.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 469.8ms | 485.6ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 432.8ms | 448.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-pre-bootstrap | 191.0ms | 198.8ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 132.3ms | 132.9ms |
| preparedRuntimeScaleMany | gateway.ws-imports | 491.2ms | 500.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 441.2ms | 462.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 418.4ms | 426.5ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 409.5ms | 417.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 368.9ms | 372.1ms |
| oneInternalHook | gateway.ws-imports | 516.2ms | 524.0ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 449.2ms | 452.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 373.9ms | 385.6ms |
| oneInternalHook | runtime.post-attach | 317.9ms | 339.9ms |
| oneInternalHook | plugins.runtime-post-bind | 293.4ms | 311.3ms |
| allInternalHooks | gateway.ws-imports | 519.3ms | 524.3ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 442.1ms | 460.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 374.2ms | 381.6ms |
| allInternalHooks | runtime.post-attach | 336.0ms | 337.5ms |
| allInternalHooks | plugins.runtime-post-bind | 314.1ms | 316.3ms |
| fiftyPlugins | sidecars.model-runtime | 552.8ms | 603.9ms |
| fiftyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 544.9ms | 595.6ms |
| fiftyPlugins | gateway.ws-imports | 506.3ms | 551.9ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 475.4ms | 480.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 433.4ms | 469.3ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 559.6ms | 569.8ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime-build.workspaceFactsMs | 551.6ms | 562.2ms |
| fiftyStartupLazyPlugins | gateway.ws-imports | 511.6ms | 543.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 485.9ms | 491.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 451.4ms | 494.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 17530.0ms | 0.057 | 2341.5MB | 1419.8MB | -921.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 17988.0ms | 0.167 | 1246.3MB | 1323.1MB | 76.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 17666.0ms | 0.170 | 1310.4MB | 1325.4MB | 15.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 734.7ms | 758.0ms | 187.0MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 680.5ms | 686.1ms | 187.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 976.4ms | 1010.9ms | 187.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 144.2ms |

## Observations

No data.

