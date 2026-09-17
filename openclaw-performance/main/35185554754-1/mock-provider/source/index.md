# OpenClaw Source Performance

Generated: 2026-09-17T05:33:13.848Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4541.5ms | 5272.6ms | 4394.7ms | 4124.5ms | 4479.4ms | 161.9ms | 630.6MB | 1.138 |
| skipChannels | gateway, skip channels | 4684.7ms | 4706.5ms | 4514.2ms | 4283.1ms | 3864.3ms | 164.1ms | 633.6MB | 1.115 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 3970.5ms | 4702.2ms | 3714.3ms | 3658.2ms | 3478.6ms | 145.4ms | 620.3MB | 1.063 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 3656.0ms | 3869.3ms | 3468.8ms | 3318.6ms | 3195.8ms | 136.3ms | 616.0MB | 1.101 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4962.2ms | 5640.5ms | 4549.5ms | 4461.5ms | 4301.9ms | 153.3ms | 626.0MB | 1.064 |
| oneInternalHook | gateway, one configured internal hook | 4816.5ms | 4938.8ms | 4815.3ms | 4420.0ms | 3971.4ms | 166.4ms | 646.5MB | 1.082 |
| allInternalHooks | gateway, all internal hooks | 4546.6ms | 4597.2ms | 4546.3ms | 4129.6ms | 3759.5ms | 159.5ms | 637.8MB | 1.113 |
| fiftyPlugins | gateway, 50 manifest plugins | 5280.8ms | 5378.7ms | 5280.7ms | 4365.8ms | 4059.5ms | 162.8ms | 639.6MB | 1.136 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4877.7ms | 4952.6ms | 4629.9ms | 4530.7ms | 4344.4ms | 182.7ms | 624.0MB | 1.050 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 617.1MB | 630.6MB | +13.5MB (+2.2%) | +11.8MB (+4.5%) | stable |
| gateway boot | skipChannels | 618.0MB | 633.6MB | +15.5MB (+2.5%) | -38.5MB (-14.0%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 591.0MB | 620.3MB | +29.2MB (+4.9%) | -4.5MB (-1.9%) | stable |
| gateway boot | preparedRuntimeScaleOne | 593.0MB | 616.0MB | +22.9MB (+3.9%) | +7.2MB (+3.1%) | stable |
| gateway boot | preparedRuntimeScaleMany | 636.5MB | 626.0MB | -10.5MB (-1.6%) | -22.7MB (-8.4%) | stable |
| gateway boot | oneInternalHook | 617.6MB | 646.5MB | +28.8MB (+4.7%) | -2.9MB (-1.3%) | stable |
| gateway boot | allInternalHooks | 617.9MB | 637.8MB | +19.9MB (+3.2%) | +7.2MB (+3.1%) | stable |
| gateway boot | fiftyPlugins | 614.0MB | 639.6MB | +25.7MB (+4.2%) | +9.4MB (+4.1%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 618.6MB | 624.0MB | +5.4MB (+0.9%) | -22.0MB (-8.4%) | stable |
| cli | gatewayHealthJsonWarmState | 70.4MiB | 72.5MiB | +2.1MiB (+3.0%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 70.5MiB | 71.9MiB | +1.4MiB (+2.0%) | n/a | stable |
| cli | configGetGatewayPort | 70.8MiB | 70.9MiB | +0.1MiB (+0.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | 198.8MB | 256.8MB | +57.9MB (+29.1%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 153 bundled plugins | 555.4MB | 509.1MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 346.9MB | 300.7MB | ok |
| workboard | 346.7MB | 300.4MB | ok |
| migrate-hermes | 345.0MB | 298.7MB | ok |
| active-memory | 341.1MB | 294.8MB | ok |
| copilot | 326.2MB | 280.0MB | ok |
| policy | 292.4MB | 246.1MB | ok |
| discord | 287.2MB | 240.9MB | ok |
| deepinfra | 285.9MB | 239.6MB | ok |
| canvas | 279.2MB | 233.0MB | ok |
| memory-wiki | 273.9MB | 227.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 2907.1ms | 3349.0ms |
| default | cli.main.gateway-run-bootstrap | 1981.7ms | 2355.8ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1981.7ms | 2355.8ms |
| default | cli.command.config-ready | 1980.7ms | 2354.2ms |
| default | process.bootstrap.cli.command.config-ready | 1980.7ms | 2354.2ms |
| skipChannels | process.bootstrap | 2974.7ms | 3043.8ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2003.6ms | 2011.5ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 2003.6ms | 2011.5ms |
| skipChannels | cli.command.config-ready | 2002.7ms | 2010.5ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 2002.7ms | 2010.5ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2653.2ms | 2816.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 1785.5ms | 1927.0ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 1785.5ms | 1927.0ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 1784.1ms | 1925.7ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 1784.1ms | 1925.7ms |
| preparedRuntimeScaleOne | process.bootstrap | 2454.0ms | 2559.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 1666.9ms | 1779.0ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 1666.9ms | 1779.0ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 1665.9ms | 1777.8ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 1665.9ms | 1777.8ms |
| preparedRuntimeScaleMany | process.bootstrap | 3443.3ms | 3666.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2490.5ms | 2628.5ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 2490.5ms | 2628.5ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 2489.2ms | 2626.8ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 2489.2ms | 2626.8ms |
| oneInternalHook | process.bootstrap | 3048.7ms | 3167.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2095.7ms | 2230.8ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 2095.7ms | 2230.8ms |
| oneInternalHook | cli.command.config-ready | 2094.3ms | 2229.4ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 2094.3ms | 2229.4ms |
| allInternalHooks | process.bootstrap | 2838.7ms | 2898.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 1872.4ms | 1918.4ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 1872.4ms | 1918.4ms |
| allInternalHooks | cli.command.config-ready | 1871.3ms | 1917.3ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 1871.3ms | 1917.3ms |
| fiftyPlugins | process.bootstrap | 3198.4ms | 3199.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2160.7ms | 2206.7ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 2160.7ms | 2206.7ms |
| fiftyPlugins | cli.command.config-ready | 2159.1ms | 2205.4ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 2159.1ms | 2205.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 3290.3ms | 3533.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2210.3ms | 2480.4ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 2210.3ms | 2480.4ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 2209.0ms | 2478.9ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 2209.0ms | 2478.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 15345.0ms | 0.196 | 870.8MB | 1123.2MB | 252.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12968.0ms | 0.231 | 889.3MB | 1147.8MB | 258.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 13030.0ms | 0.153 | 868.8MB | 1128.3MB | 259.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 502.0ms | 536.0ms | 72.5MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 525.5ms | 573.4ms | 71.9MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 972.0ms | 1008.0ms | 70.9MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 277.3ms |
| baseline | v2 | smoke | 3.53.3 | 17 | 21 | 4100 | 1000 | ok | 3.4MB | 0.0MB | 354.7ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +33.3% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.1ms | 2.1ms | 1000 | 20 | 2.9ms | -26.0% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.5ms | 0.6ms | 250 | 20 | 0.7ms | -11.9% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.4ms | 696 | 20 | 0.6ms | -32.0% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -16.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.2ms | -32.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -33.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -33.0% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.4ms | 675 | 20 | 0.6ms | -38.2% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -24.2% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.3ms | 256 | 20 | 0.5ms | -48.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 0.3ms | 0.3ms | 256 | 20 | 0.3ms | -13.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

