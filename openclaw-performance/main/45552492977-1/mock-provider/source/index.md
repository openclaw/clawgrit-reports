# OpenClaw Source Performance

Generated: 2026-11-25T05:39:40.998Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 11567.2ms | 11610.5ms | 8492.7ms | 10736.6ms | 11551.2ms | 959.6ms | 1120.7MB | 1.297 |
| skipChannels | gateway, skip channels | 12013.6ms | 12028.4ms | 8644.6ms | 11450.4ms | 12018.8ms | 978.5ms | 1127.8MB | 1.253 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 11541.6ms | 11599.3ms | 8628.7ms | 10940.3ms | 11573.0ms | 969.5ms | 1104.1MB | 1.219 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 11597.7ms | 11601.8ms | 8640.7ms | 11005.8ms | 11590.7ms | 977.0ms | 1087.2MB | 1.223 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 11927.3ms | 11978.7ms | 8733.1ms | 11184.4ms | 11917.9ms | 987.5ms | 1108.3MB | 1.268 |
| oneInternalHook | gateway, one configured internal hook | 11802.7ms | 12044.6ms | 8494.7ms | 11042.7ms | 11776.6ms | 972.6ms | 1143.4MB | 1.245 |
| allInternalHooks | gateway, all internal hooks | 12087.1ms | 12151.3ms | 8596.9ms | 11297.1ms | 12107.9ms | 974.7ms | 1128.1MB | 1.241 |
| fiftyPlugins | gateway, 50 manifest plugins | 11999.0ms | 12010.2ms | 8659.4ms | 11440.0ms | 12003.0ms | 983.9ms | 1131.7MB | 1.252 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 11456.0ms | 11687.1ms | 8629.5ms | 10850.3ms | 11472.6ms | 988.0ms | 1093.6MB | 1.283 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1138.0MB | 1120.7MB | -17.3MB (-1.5%) | +0.9MB (+0.3%) | stable |
| gateway boot | skipChannels | 1107.4MB | 1127.8MB | +20.3MB (+1.8%) | +1.7MB (+0.6%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1055.8MB | 1104.1MB | +48.3MB (+4.6%) | +17.1MB (+6.8%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1087.9MB | 1087.2MB | -0.7MB (-0.1%) | +25.9MB (+10.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1121.2MB | 1108.3MB | -13.0MB (-1.2%) | -9.5MB (-3.4%) | stable |
| gateway boot | oneInternalHook | 1111.9MB | 1143.4MB | +31.6MB (+2.8%) | +1.7MB (+0.6%) | stable |
| gateway boot | allInternalHooks | 1136.4MB | 1128.1MB | -8.2MB (-0.7%) | +1.8MB (+0.7%) | stable |
| gateway boot | fiftyPlugins | 1092.4MB | 1131.7MB | +39.3MB (+3.6%) | +8.0MB (+2.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1085.2MB | 1093.6MB | +8.4MB (+0.8%) | +1.6MB (+0.6%) | stable |
| cli | gatewayHealthJsonWarmState | 68.3MiB | 68.2MiB | -0.1MiB (-0.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 68.0MiB | 67.9MiB | -0.1MiB (-0.2%) | n/a | stable |
| cli | configGetGatewayPort | 68.0MiB | 68.3MiB | +0.4MiB (+0.6%) | n/a | stable |
| mock hello | gateway RSS delta avg | 571.0MB | 643.9MB | +72.9MB (+12.8%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 47.0MB | 0.0MB | ok |
| all 185 bundled plugins | 549.6MB | 502.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 368.8MB | 321.8MB | ok |
| knowledge | 348.0MB | 301.0MB | ok |
| active-memory | 345.1MB | 298.1MB | ok |
| workboard | 343.3MB | 296.3MB | ok |
| clickclack | 342.6MB | 295.6MB | ok |
| agentsapi | 338.1MB | 291.0MB | ok |
| telegram | 336.5MB | 289.5MB | ok |
| copilot | 330.7MB | 283.7MB | ok |
| muse | 330.5MB | 283.5MB | ok |
| team-reports | 323.4MB | 276.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 12048.0ms | 12091.8ms |
| default | process.bootstrap | 5958.7ms | 5967.0ms |
| default | cli.main.gateway-run-bootstrap | 2141.7ms | 2143.0ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 2141.7ms | 2143.0ms |
| default | cli.command.config-ready | 2138.8ms | 2139.9ms |
| skipChannels | cli.main.gateway-run-parse | 10914.5ms | 10915.1ms |
| skipChannels | process.bootstrap | 6096.4ms | 6182.6ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2169.6ms | 2232.0ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 2169.6ms | 2232.0ms |
| skipChannels | cli.command.config-ready | 2166.5ms | 2229.1ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 10422.2ms | 10437.2ms |
| preparedRuntimeCatalogStall | process.bootstrap | 6070.8ms | 6090.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 2145.6ms | 2177.4ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 2145.6ms | 2177.4ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 2142.6ms | 2174.3ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 10469.6ms | 10486.7ms |
| preparedRuntimeScaleOne | process.bootstrap | 6080.6ms | 6086.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 2165.7ms | 2175.0ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 2165.7ms | 2175.0ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 2162.6ms | 2172.0ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 10827.3ms | 10856.4ms |
| preparedRuntimeScaleMany | process.bootstrap | 6165.7ms | 6204.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2243.6ms | 2250.0ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 2243.6ms | 2250.0ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 2240.4ms | 2246.9ms |
| oneInternalHook | cli.main.gateway-run-parse | 10689.2ms | 10920.1ms |
| oneInternalHook | process.bootstrap | 5974.0ms | 6078.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2116.3ms | 2130.9ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 2116.3ms | 2130.9ms |
| oneInternalHook | cli.command.config-ready | 2113.1ms | 2128.1ms |
| allInternalHooks | cli.main.gateway-run-parse | 10973.3ms | 11076.0ms |
| allInternalHooks | process.bootstrap | 6085.3ms | 6097.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2154.5ms | 2182.4ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 2154.5ms | 2182.4ms |
| allInternalHooks | cli.command.config-ready | 2151.4ms | 2179.3ms |
| fiftyPlugins | cli.main.gateway-run-parse | 11095.8ms | 11110.7ms |
| fiftyPlugins | process.bootstrap | 6132.0ms | 6136.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2212.2ms | 2234.1ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 2212.2ms | 2234.1ms |
| fiftyPlugins | cli.command.config-ready | 2209.6ms | 2231.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 10360.3ms | 10527.8ms |
| fiftyStartupLazyPlugins | process.bootstrap | 6133.9ms | 6226.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2230.9ms | 2255.4ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 2230.9ms | 2255.4ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 2227.7ms | 2252.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 24459.0ms | 0.491 | 1732.2MB | 2374.1MB | 641.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 24668.0ms | 0.446 | 1687.9MB | 2363.8MB | 675.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 24103.0ms | 0.456 | 1679.4MB | 2293.3MB | 614.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 1552.7ms | 1770.6ms | 68.2MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 1343.3ms | 1354.7ms | 67.9MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1644.8ms | 1652.5ms | 68.3MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 42 | 44 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 775.1ms |
| baseline | v2 | smoke | 3.53.4 | 41 | 43 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 481.3ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +84.6% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.8ms | 2.8ms | 1000 | 20 | 1.9ms | +46.3% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.8ms | 0.8ms | 250 | 20 | 0.5ms | +52.5% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.6ms | 0.7ms | 696 | 20 | 0.4ms | +78.1% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +74.1% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.3ms | 0.3ms | 100 | 20 | 0.2ms | +60.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +72.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.2ms | 0.3ms | 100 | 20 | 0.1ms | +79.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.6ms | 0.6ms | 675 | 20 | 0.4ms | +70.6% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.1ms | 0.1ms | 64 | 20 | 0.0ms | +103.3% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.3ms | 0.3ms | 256 | 20 | 0.2ms | +77.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 4.0ms | 6.8ms | 256 | 20 | 3.2ms | +113.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

