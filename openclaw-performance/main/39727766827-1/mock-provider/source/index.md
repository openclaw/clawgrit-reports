# OpenClaw Source Performance

Generated: 2026-10-22T05:34:24.386Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4827.5ms | 4844.5ms | 3477.1ms | 4265.4ms | 4730.6ms | 262.4ms | 1292.2MB | 1.474 |
| skipChannels | gateway, skip channels | 4898.5ms | 4926.0ms | 3506.7ms | 4360.5ms | 4843.5ms | 272.9ms | 1338.0MB | 1.426 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4686.6ms | 4694.4ms | 3463.8ms | 4283.7ms | 4668.8ms | 272.6ms | 1633.6MB | 1.506 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4777.6ms | 4881.0ms | 3399.9ms | 4214.5ms | 4719.7ms | 264.2ms | 1611.9MB | 1.482 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5062.3ms | 5063.0ms | 3493.0ms | 4334.1ms | 4970.3ms | 267.4ms | 1641.2MB | 1.389 |
| oneInternalHook | gateway, one configured internal hook | 5004.8ms | 5022.8ms | 3556.9ms | 4431.1ms | 4942.7ms | 275.1ms | 1313.8MB | 1.426 |
| allInternalHooks | gateway, all internal hooks | 4891.4ms | 5078.0ms | 3460.1ms | 4327.8ms | 4815.4ms | 268.3ms | 1340.7MB | 1.460 |
| fiftyPlugins | gateway, 50 manifest plugins | 12631.2ms | 13425.4ms | 3528.5ms | 12183.4ms | 12616.6ms | 270.5ms | 4173.9MB | 1.421 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4822.4ms | 5053.4ms | 3685.1ms | 4322.4ms | 4799.9ms | 281.8ms | 1336.4MB | 1.486 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1339.7MB | 1292.2MB | -47.5MB (-3.5%) | +2.8MB (+0.9%) | stable |
| gateway boot | skipChannels | 1668.9MB | 1338.0MB | -330.9MB (-19.8%) | -78.7MB (-28.7%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 1714.9MB | 1633.6MB | -81.3MB (-4.7%) | +35.7MB (+15.9%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1676.7MB | 1611.9MB | -64.8MB (-3.9%) | +18.5MB (+7.6%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1688.9MB | 1641.2MB | -47.6MB (-2.8%) | -13.6MB (-5.3%) | stable |
| gateway boot | oneInternalHook | 1641.5MB | 1313.8MB | -327.7MB (-20.0%) | +58.4MB (+28.7%) | improved |
| gateway boot | allInternalHooks | 1640.4MB | 1340.7MB | -299.7MB (-18.3%) | +7.5MB (+3.1%) | improved |
| gateway boot | fiftyPlugins | 4201.1MB | 4173.9MB | -27.2MB (-0.6%) | +2.3MB (+0.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1381.8MB | 1336.4MB | -45.4MB (-3.3%) | -27.4MB (-9.9%) | stable |
| cli | gatewayHealthJsonWarmState | 74.4MiB | 74.5MiB | +0.0MiB (+0.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.9MiB | 74.3MiB | +0.5MiB (+0.6%) | n/a | stable |
| cli | configGetGatewayPort | 73.7MiB | 74.6MiB | +1.0MiB (+1.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 557.8MB | 555.6MB | -2.1MB (-0.4%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 172 bundled plugins | 587.3MB | 542.9MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 390.2MB | 345.9MB | ok |
| active-memory | 387.4MB | 343.0MB | ok |
| agentsapi | 355.1MB | 310.7MB | ok |
| muse | 342.2MB | 297.9MB | ok |
| voice-call | 339.2MB | 294.9MB | ok |
| copilot | 339.0MB | 294.7MB | ok |
| policy | 337.7MB | 293.3MB | ok |
| opencode | 334.4MB | 290.1MB | ok |
| openrouter | 320.6MB | 276.2MB | ok |
| minimax | 320.1MB | 275.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 5005.9ms | 5024.2ms |
| default | process.bootstrap | 2192.4ms | 2215.0ms |
| default | cli.main.gateway-run-bootstrap | 881.1ms | 886.8ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 881.1ms | 886.8ms |
| default | cli.command.config-ready | 879.7ms | 885.4ms |
| skipChannels | cli.main.gateway-run-parse | 4872.0ms | 4892.8ms |
| skipChannels | process.bootstrap | 2238.0ms | 2239.3ms |
| skipChannels | cli.main.gateway-run-bootstrap | 898.2ms | 912.7ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 898.2ms | 912.7ms |
| skipChannels | cli.command.config-ready | 897.1ms | 911.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 5478.4ms | 5503.1ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2194.8ms | 2244.8ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 869.0ms | 886.8ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 869.0ms | 886.8ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 867.7ms | 885.7ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 5561.5ms | 5670.7ms |
| preparedRuntimeScaleOne | process.bootstrap | 2157.4ms | 2193.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 864.0ms | 884.7ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 864.0ms | 884.7ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 862.8ms | 883.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 6190.7ms | 6254.2ms |
| preparedRuntimeScaleMany | process.bootstrap | 2200.8ms | 2259.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 881.2ms | 900.2ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 881.2ms | 900.2ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 879.8ms | 898.8ms |
| oneInternalHook | cli.main.gateway-run-parse | 4930.0ms | 4949.7ms |
| oneInternalHook | process.bootstrap | 2288.2ms | 2325.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 924.1ms | 927.8ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 924.1ms | 927.8ms |
| oneInternalHook | cli.command.config-ready | 922.9ms | 926.6ms |
| allInternalHooks | cli.main.gateway-run-parse | 4826.5ms | 4991.2ms |
| allInternalHooks | process.bootstrap | 2189.7ms | 2200.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 888.3ms | 888.8ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 888.3ms | 888.8ms |
| allInternalHooks | cli.command.config-ready | 886.8ms | 887.4ms |
| fiftyPlugins | cli.main.gateway-run-parse | 13461.3ms | 14287.9ms |
| fiftyPlugins | plugins.runtime-post-bind | 8058.4ms | 8548.3ms |
| fiftyPlugins | plugins.gateway-load.loadMs | 8054.3ms | 8542.8ms |
| fiftyPlugins | process.bootstrap | 2261.8ms | 2357.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 918.7ms | 938.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4954.5ms | 5111.0ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2326.3ms | 2446.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 993.9ms | 1002.7ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 993.9ms | 1002.7ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 991.6ms | 1001.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11143.0ms | 0.718 | 1640.1MB | 2197.2MB | 557.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10793.0ms | 0.741 | 1626.8MB | 2194.7MB | 567.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10466.0ms | 0.764 | 1655.1MB | 2197.1MB | 542.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 598.3ms | 835.5ms | 74.5MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 525.9ms | 542.0ms | 74.3MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 607.1ms | 718.1ms | 74.6MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 30 | 31 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 342.1ms |
| baseline | v2 | smoke | 3.53.3 | 29 | 31 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 278.9ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -5.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.8ms | 1000 | 20 | 1.5ms | +19.7% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | +8.1% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.3ms | +7.3% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +80.0% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +71.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +6.5% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +22.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | +8.7% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | 0.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.2ms | 256 | 20 | 0.1ms | +6.3% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.2ms | 3.4ms | 256 | 20 | 4.1ms | -18.5% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

