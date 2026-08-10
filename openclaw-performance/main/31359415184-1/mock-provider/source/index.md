# OpenClaw Source Performance

Generated: 2026-08-10T05:50:23.727Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6545.3ms | 6555.9ms | 6545.3ms | 5878.9ms | 6457.7ms | 113.5ms | 1241.0MB | 1.528 |
| skipChannels | gateway, skip channels | 6441.9ms | 6606.4ms | 6441.7ms | 5704.5ms | 5721.3ms | 110.0ms | 1281.6MB | 1.514 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 6185.7ms | 6200.5ms | 6185.4ms | 5700.1ms | 5709.3ms | 115.2ms | 1275.8MB | 1.473 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 6229.2ms | 6357.0ms | 6227.8ms | 5621.4ms | 5636.8ms | 114.8ms | 1284.0MB | 1.445 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6748.8ms | 6866.7ms | 6748.6ms | 5686.1ms | 5704.5ms | 117.8ms | 1289.2MB | 1.484 |
| oneInternalHook | gateway, one configured internal hook | 6564.7ms | 6689.6ms | 6564.3ms | 5839.2ms | 5856.8ms | 117.0ms | 1276.4MB | 1.543 |
| allInternalHooks | gateway, all internal hooks | 6607.4ms | 6782.8ms | 6607.2ms | 5896.9ms | 5906.1ms | 118.3ms | 1489.9MB | 1.529 |
| fiftyPlugins | gateway, 50 manifest plugins | 6882.9ms | 6966.6ms | 6882.8ms | 6368.2ms | 6376.5ms | 117.8ms | 1284.4MB | 1.470 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6443.8ms | 6533.9ms | 6443.6ms | 5930.6ms | 5938.4ms | 113.8ms | 1272.8MB | 1.530 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 981.5MB | 1241.0MB | +259.5MB (+26.4%) | +118.9MB (+28.4%) | watch |
| gateway boot | skipChannels | 1103.0MB | 1281.6MB | +178.6MB (+16.2%) | +425.2MB (+99.0%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 976.8MB | 1275.8MB | +299.1MB (+30.6%) | +495.5MB (+135.8%) | watch |
| gateway boot | preparedRuntimeScaleOne | 987.8MB | 1284.0MB | +296.2MB (+30.0%) | +530.1MB (+158.9%) | watch |
| gateway boot | preparedRuntimeScaleMany | 1020.7MB | 1289.2MB | +268.5MB (+26.3%) | +505.4MB (+151.3%) | watch |
| gateway boot | oneInternalHook | 981.0MB | 1276.4MB | +295.5MB (+30.1%) | +474.7MB (+130.2%) | watch |
| gateway boot | allInternalHooks | 1022.2MB | 1489.9MB | +467.7MB (+45.8%) | +709.2MB (+191.0%) | watch |
| gateway boot | fiftyPlugins | 1025.8MB | 1284.4MB | +258.6MB (+25.2%) | +532.1MB (+149.2%) | watch |
| gateway boot | fiftyStartupLazyPlugins | 1017.9MB | 1272.8MB | +254.9MB (+25.0%) | +438.7MB (+108.3%) | watch |
| cli | gatewayHealthJsonConnected | 189.2MB | 192.1MB | +2.8MB (+1.5%) | n/a | stable |
| cli | gatewayHealthJsonFirstDevice | 188.8MB | 192.4MB | +3.5MB (+1.9%) | n/a | stable |
| cli | configGetGatewayPort | 189.1MB | 192.0MB | +2.8MB (+1.5%) | n/a | stable |
| mock hello | gateway RSS delta avg | 36.9MB | 69.8MB | +32.9MB (+89.2%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 87 bundled plugins | 640.5MB | 594.3MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 608.1MB | 561.9MB | ok |
| codex | 556.4MB | 510.2MB | ok |
| llm-task | 546.9MB | 500.7MB | ok |
| workboard | 535.7MB | 489.4MB | ok |
| voice-call | 532.1MB | 485.8MB | ok |
| memory-lancedb | 529.3MB | 483.0MB | ok |
| active-memory | 528.2MB | 482.0MB | ok |
| openai | 514.0MB | 467.8MB | ok |
| beam | 514.0MB | 467.8MB | ok |
| google | 426.5MB | 380.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | startup.maintenance | 2825.6ms | 2826.1ms |
| default | runtime.post-attach | 782.5ms | 814.6ms |
| default | cli.main.gateway-run-select-environment | 426.5ms | 435.5ms |
| default | cli.main.gateway-run-bootstrap | 390.5ms | 406.9ms |
| default | sidecars.model-runtime | 363.6ms | 378.3ms |
| skipChannels | startup.maintenance | 2783.0ms | 2932.1ms |
| skipChannels | cli.main.gateway-run-select-environment | 427.9ms | 428.6ms |
| skipChannels | sidecars.model-runtime | 389.2ms | 399.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 387.3ms | 392.6ms |
| skipChannels | sidecars.model-runtime-build.workspaceFactsMs | 377.8ms | 381.6ms |
| preparedRuntimeCatalogStall | startup.maintenance | 2754.3ms | 2866.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 443.7ms | 444.7ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 392.9ms | 421.1ms |
| preparedRuntimeCatalogStall | sidecars.reply-runtime | 192.3ms | 235.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 160.9ms | 171.7ms |
| preparedRuntimeScaleOne | startup.maintenance | 2751.8ms | 2792.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 449.1ms | 450.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 412.8ms | 413.5ms |
| preparedRuntimeScaleOne | sidecars.reply-runtime | 215.7ms | 223.8ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 190.7ms | 192.3ms |
| preparedRuntimeScaleMany | startup.maintenance | 2772.0ms | 2807.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 450.7ms | 451.2ms |
| preparedRuntimeScaleMany | sidecars.reply-runtime | 433.4ms | 438.7ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 429.5ms | 439.2ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 413.2ms | 428.2ms |
| oneInternalHook | startup.maintenance | 2875.3ms | 2975.3ms |
| oneInternalHook | cli.main.gateway-run-select-environment | 430.7ms | 441.3ms |
| oneInternalHook | sidecars.model-runtime | 413.9ms | 415.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 404.4ms | 405.5ms |
| oneInternalHook | sidecars.model-runtime-build.workspaceFactsMs | 394.5ms | 395.0ms |
| allInternalHooks | startup.maintenance | 2866.4ms | 2910.9ms |
| allInternalHooks | cli.main.gateway-run-select-environment | 435.2ms | 457.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 402.8ms | 407.8ms |
| allInternalHooks | sidecars.model-runtime | 380.5ms | 381.9ms |
| allInternalHooks | sidecars.model-runtime-build.workspaceFactsMs | 362.4ms | 369.7ms |
| fiftyPlugins | startup.maintenance | 3046.2ms | 3079.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 498.9ms | 520.2ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 485.2ms | 485.9ms |
| fiftyPlugins | cli.main.gateway-run-pre-bootstrap | 208.0ms | 208.9ms |
| fiftyPlugins | runtime.post-attach | 197.7ms | 199.9ms |
| fiftyStartupLazyPlugins | startup.maintenance | 2955.2ms | 2990.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 456.8ms | 473.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 448.0ms | 452.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap | 198.9ms | 202.0ms |
| fiftyStartupLazyPlugins | sidecars.model-runtime | 186.0ms | 208.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12587.0ms | 0.159 | 1244.2MB | 1271.8MB | 27.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12676.0ms | 0.158 | 1188.0MB | 1202.2MB | 14.2MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12962.0ms | 0.077 | 1169.1MB | 1336.7MB | 167.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonConnected | gateway health --json (connected) | 769.1ms | 772.7ms | 192.1MB | code:0 x3 |
| gatewayHealthJsonFirstDevice | gateway health --json (first device) | 719.2ms | 754.4ms | 192.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 921.9ms | 922.3ms | 192.0MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 141.5ms |

## Observations

No data.

