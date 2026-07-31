# OpenClaw Source Performance

Generated: 2026-07-31T06:22:48.088Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6411.9ms | 6449.0ms | 6411.8ms | 4418.0ms | 4497.6ms | 216.8ms | 1106.5MB | 1.263 |
| skipChannels | gateway, skip channels | 4580.8ms | 6432.3ms | 4580.7ms | 4434.6ms | 4443.2ms | 213.5ms | 1058.2MB | 1.326 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 2969.2ms | 3114.3ms | 2969.1ms | 2703.8ms | 2719.3ms | 210.5ms | 975.5MB | 1.413 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3267.8ms | 3383.6ms | 3267.7ms | 2647.6ms | 2662.4ms | 213.5ms | 864.3MB | 1.478 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6089.4ms | 6638.2ms | 5944.7ms | 5872.7ms | 5880.9ms | 211.3ms | 863.5MB | 1.381 |
| oneInternalHook | gateway, one configured internal hook | 5160.6ms | 6942.8ms | 5160.3ms | 5020.6ms | 5029.8ms | 216.7ms | 1151.3MB | 1.371 |
| allInternalHooks | gateway, all internal hooks | 5181.4ms | 5353.3ms | 5181.1ms | 5086.9ms | 5096.0ms | 223.2ms | 936.0MB | 1.354 |
| fiftyPlugins | gateway, 50 manifest plugins | 3595.0ms | 3625.1ms | 3594.8ms | 3042.9ms | 3084.8ms | 218.2ms | 1014.8MB | 1.535 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3397.2ms | 3459.7ms | 3389.6ms | 2794.3ms | 2854.0ms | 216.2ms | 1005.3MB | 1.472 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 996.1MB | 1106.5MB | +110.4MB (+11.1%) | -115.1MB (-17.8%) | stable |
| gateway boot | skipChannels | 995.3MB | 1058.2MB | +62.8MB (+6.3%) | -96.2MB (-16.0%) | stable |
| gateway boot | oneInternalHook | 987.4MB | 1151.3MB | +163.9MB (+16.6%) | +22.1MB (+4.3%) | stable |
| gateway boot | allInternalHooks | 1005.3MB | 936.0MB | -69.3MB (-6.9%) | +55.0MB (+10.8%) | stable |
| gateway boot | fiftyPlugins | 1049.0MB | 1014.8MB | -34.2MB (-3.3%) | -271.1MB (-49.7%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1112.7MB | 1005.3MB | -107.4MB (-9.7%) | +23.9MB (+3.8%) | stable |
| cli | gatewayHealthJson | 187.7MB | 187.5MB | -0.3MB (-0.1%) | n/a | stable |
| cli | configGetGatewayPort | 186.6MB | 187.8MB | +1.3MB (+0.7%) | n/a | stable |
| mock hello | gateway RSS delta avg | -544.3MB | -476.7MB | +67.5MB (-12.4%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 549.3MB | 503.3MB | ok |
| codex | 538.8MB | 492.8MB | ok |
| memory-lancedb | 533.8MB | 487.8MB | ok |
| acpx | 532.8MB | 486.8MB | ok |
| google-meet | 529.5MB | 483.6MB | ok |
| openai | 527.5MB | 481.5MB | ok |
| migrate-hermes | 525.3MB | 479.3MB | ok |
| anthropic | 524.1MB | 478.1MB | ok |
| active-memory | 510.1MB | 464.1MB | ok |
| voice-call | 509.3MB | 463.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | runtime.post-attach | 1857.7ms | 1863.3ms |
| default | plugins.runtime-post-bind | 1752.5ms | 1763.8ms |
| default | sidecars.session-locks | 1744.0ms | 1782.5ms |
| default | plugins.gateway-load.loadMs | 1731.8ms | 1734.9ms |
| default | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 1326.6ms | 1335.1ms |
| skipChannels | runtime.post-attach | 1813.6ms | 1827.2ms |
| skipChannels | plugins.runtime-post-bind | 1783.0ms | 1807.4ms |
| skipChannels | sidecars.session-locks | 1782.6ms | 1782.6ms |
| skipChannels | plugins.gateway-load.loadMs | 1759.1ms | 1790.3ms |
| skipChannels | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 1342.9ms | 1369.8ms |
| preparedRuntimeCatalogStall | plugins.bootstrap | 374.5ms | 378.4ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-select-environment | 300.7ms | 324.1ms |
| preparedRuntimeCatalogStall | post-ready.gateway-data.plugins | 205.1ms | 213.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-pre-bootstrap | 119.1ms | 129.1ms |
| preparedRuntimeCatalogStall | cli.main.dotenv | 108.5ms | 111.5ms |
| preparedRuntimeScaleOne | post-ready.gateway-data.plugins | 415.4ms | 428.0ms |
| preparedRuntimeScaleOne | plugins.bootstrap | 363.2ms | 365.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-select-environment | 307.6ms | 319.3ms |
| preparedRuntimeScaleOne | sidecars.model-runtime | 139.1ms | 142.4ms |
| preparedRuntimeScaleOne | sidecars.model-runtime-build.workspaceFactsMs | 134.5ms | 137.3ms |
| preparedRuntimeScaleMany | plugins.bootstrap | 3390.1ms | 3457.2ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 347.5ms | 357.1ms |
| preparedRuntimeScaleMany | sidecars.model-runtime-build.workspaceFactsMs | 340.9ms | 347.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-select-environment | 303.4ms | 315.4ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery | 254.2ms | 263.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2806.0ms | 2841.1ms |
| oneInternalHook | sidecars.session-locks | 1719.0ms | 1719.0ms |
| oneInternalHook | runtime.post-attach | 807.2ms | 828.3ms |
| oneInternalHook | plugins.runtime-post-bind | 778.4ms | 797.5ms |
| oneInternalHook | plugins.gateway-load.loadMs | 761.1ms | 777.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2837.3ms | 2941.8ms |
| allInternalHooks | runtime.post-attach | 818.8ms | 841.5ms |
| allInternalHooks | plugins.runtime-post-bind | 798.1ms | 819.7ms |
| allInternalHooks | plugins.gateway-load.loadMs | 771.9ms | 794.2ms |
| allInternalHooks | plugins.gateway-load.plugin.teams-meetings.loadAndRegisterMs | 460.5ms | 469.1ms |
| fiftyPlugins | plugins.bootstrap | 458.0ms | 459.8ms |
| fiftyPlugins | cli.main.gateway-run-select-environment | 315.8ms | 329.9ms |
| fiftyPlugins | sidecars.session-locks | 282.3ms | 283.5ms |
| fiftyPlugins | runtime.post-attach | 257.9ms | 263.7ms |
| fiftyPlugins | post-ready.gateway-data.plugins | 247.6ms | 289.9ms |
| fiftyStartupLazyPlugins | plugins.bootstrap | 455.0ms | 460.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-select-environment | 312.9ms | 329.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks | 280.9ms | 289.5ms |
| fiftyStartupLazyPlugins | post-ready.gateway-data.plugins | 193.2ms | 200.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins | 179.8ms | 190.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11594.0ms | 0.000 | 2786.7MB | 1212.2MB | -1574.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10981.0ms | 0.182 | 1044.5MB | 1189.6MB | 145.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11186.0ms | 0.089 | 1108.1MB | 1107.4MB | -0.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 644.6ms | 660.0ms | 187.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 837.0ms | 865.9ms | 187.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 137.4ms |

## Observations

No data.

