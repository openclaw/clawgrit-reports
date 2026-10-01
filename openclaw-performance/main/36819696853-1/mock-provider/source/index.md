# OpenClaw Source Performance

Generated: 2026-10-01T05:36:13.518Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5301.6ms | 5332.7ms | 4690.5ms | 4674.8ms | 5249.7ms | 252.4ms | 778.5MB | 1.320 |
| skipChannels | gateway, skip channels | 5002.8ms | 5149.5ms | 4633.9ms | 4598.0ms | 4993.2ms | 262.9ms | 927.5MB | 1.200 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 5173.7ms | 5396.5ms | 4924.6ms | 4857.1ms | 5163.2ms | 265.8ms | 747.5MB | 1.297 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5236.8ms | 5991.3ms | 4914.6ms | 4888.2ms | 5225.9ms | 272.5ms | 744.8MB | 1.215 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4934.9ms | 5267.1ms | 4472.4ms | 4445.8ms | 4930.3ms | 232.0ms | 753.3MB | 1.216 |
| oneInternalHook | gateway, one configured internal hook | 5104.9ms | 5326.9ms | 4705.3ms | 4662.9ms | 5096.6ms | 253.5ms | 928.4MB | 1.314 |
| allInternalHooks | gateway, all internal hooks | 5244.8ms | 5308.8ms | 4928.2ms | 4802.5ms | 5238.7ms | 239.4ms | 920.5MB | 1.319 |
| fiftyPlugins | gateway, 50 manifest plugins | 5230.0ms | 5324.1ms | 4785.2ms | 4752.9ms | 5221.0ms | 262.9ms | 756.6MB | 1.161 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4587.4ms | 4621.0ms | 4237.7ms | 4220.1ms | 4581.2ms | 230.5ms | 749.7MB | 1.155 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 779.3MB | 778.5MB | -0.8MB (-0.1%) | +7.3MB (+2.4%) | stable |
| gateway boot | skipChannels | 873.8MB | 927.5MB | +53.6MB (+6.1%) | -5.5MB (-2.5%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 743.1MB | 747.5MB | +4.4MB (+0.6%) | +16.2MB (+7.5%) | stable |
| gateway boot | preparedRuntimeScaleOne | 745.9MB | 744.8MB | -1.1MB (-0.1%) | -12.4MB (-5.4%) | stable |
| gateway boot | preparedRuntimeScaleMany | 757.2MB | 753.3MB | -3.9MB (-0.5%) | +3.4MB (+1.5%) | stable |
| gateway boot | oneInternalHook | 782.6MB | 928.4MB | +145.8MB (+18.6%) | -0.4MB (-0.2%) | stable |
| gateway boot | allInternalHooks | 799.5MB | 920.5MB | +121.0MB (+15.1%) | +5.0MB (+2.3%) | stable |
| gateway boot | fiftyPlugins | 766.9MB | 756.6MB | -10.2MB (-1.3%) | -2.1MB (-0.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 755.7MB | 749.7MB | -6.0MB (-0.8%) | +1.7MB (+0.8%) | stable |
| cli | gatewayHealthJsonWarmState | 74.3MiB | 74.2MiB | -0.1MiB (-0.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 74.4MiB | 73.7MiB | -0.7MiB (-1.0%) | n/a | stable |
| cli | configGetGatewayPort | 74.0MiB | 73.7MiB | -0.3MiB (-0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | 472.5MB | 526.0MB | +53.5MB (+11.3%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.2MB | 0.0MB | ok |
| all 160 bundled plugins | 552.3MB | 506.0MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 373.9MB | 327.6MB | ok |
| active-memory | 357.2MB | 310.9MB | ok |
| agentsapi | 329.2MB | 282.9MB | ok |
| copilot | 325.6MB | 279.4MB | ok |
| discord | 325.1MB | 278.8MB | ok |
| deepinfra | 316.1MB | 269.9MB | ok |
| policy | 314.9MB | 268.7MB | ok |
| opencode-go | 313.2MB | 266.9MB | ok |
| voice-call | 312.2MB | 265.9MB | ok |
| clickclack | 311.4MB | 265.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | process.bootstrap | 3150.6ms | 3216.4ms |
| default | cli.main.gateway-run-bootstrap | 2064.9ms | 2116.5ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 2064.9ms | 2116.5ms |
| default | cli.command.config-ready | 2064.3ms | 2115.6ms |
| default | process.bootstrap.cli.command.config-ready | 2064.3ms | 2115.6ms |
| skipChannels | process.bootstrap | 3070.5ms | 3093.6ms |
| skipChannels | cli.main.gateway-run-bootstrap | 1979.1ms | 2023.3ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 1979.1ms | 2023.3ms |
| skipChannels | cli.command.config-ready | 1978.5ms | 2022.8ms |
| skipChannels | process.bootstrap.cli.command.config-ready | 1978.5ms | 2022.8ms |
| preparedRuntimeCatalogStall | process.bootstrap | 3309.0ms | 3690.9ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 2165.7ms | 2489.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 2165.7ms | 2489.3ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 2165.0ms | 2488.7ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.command.config-ready | 2165.0ms | 2488.7ms |
| preparedRuntimeScaleOne | process.bootstrap | 3505.3ms | 3863.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 2418.0ms | 2453.7ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 2418.0ms | 2453.7ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 2417.3ms | 2453.0ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.command.config-ready | 2417.3ms | 2453.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 3032.2ms | 3457.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 2012.7ms | 2187.1ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 2012.7ms | 2187.1ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 2012.2ms | 2186.3ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.command.config-ready | 2012.2ms | 2186.3ms |
| oneInternalHook | process.bootstrap | 3154.0ms | 3232.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2047.1ms | 2143.0ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 2047.1ms | 2143.0ms |
| oneInternalHook | cli.command.config-ready | 2046.1ms | 2142.4ms |
| oneInternalHook | process.bootstrap.cli.command.config-ready | 2046.1ms | 2142.4ms |
| allInternalHooks | process.bootstrap | 3217.0ms | 3303.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2132.7ms | 2242.5ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 2132.7ms | 2242.5ms |
| allInternalHooks | cli.command.config-ready | 2131.9ms | 2241.9ms |
| allInternalHooks | process.bootstrap.cli.command.config-ready | 2131.9ms | 2241.9ms |
| fiftyPlugins | process.bootstrap | 3221.4ms | 3250.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2111.4ms | 2117.9ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 2111.4ms | 2117.9ms |
| fiftyPlugins | cli.command.config-ready | 2110.8ms | 2117.3ms |
| fiftyPlugins | process.bootstrap.cli.command.config-ready | 2110.8ms | 2117.3ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2999.2ms | 3054.1ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 1953.9ms | 2032.6ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 1953.9ms | 2032.6ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 1953.4ms | 2032.1ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.command.config-ready | 1953.4ms | 2032.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 20653.0ms | 0.629 | 1421.1MB | 1916.1MB | 495.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 20866.0ms | 0.719 | 1425.4MB | 1964.5MB | 539.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 20954.0ms | 0.716 | 1420.4MB | 1964.3MB | 543.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 937.8ms | 954.4ms | 74.2MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 948.1ms | 955.2ms | 73.7MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1627.6ms | 1644.9ms | 73.7MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 20 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 638.7ms |
| baseline | v2 | smoke | 3.53.3 | 19 | 24 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 391.3ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +142.1% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 3.4ms | 4.6ms | 1000 | 20 | 3.1ms | +48.7% | indexes: idx_task_runs_runtime_status; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| task-runs.cron-source.list | state | 250 | 20 | 0.8ms | 0.9ms | 250 | 20 | 0.8ms | +13.0% | indexes: idx_task_runs_runtime_source_ended; full scans: none; temp sorts: USE TEMP B-TREE FOR ORDER BY |
| delivery.pending.load | state | 696 | 20 | 0.6ms | 0.7ms | 696 | 20 | 0.3ms | +104.7% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +111.2% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.3ms | 0.3ms | 100 | 20 | 0.1ms | +87.3% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +51.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +99.1% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.6ms | 0.6ms | 675 | 20 | 0.3ms | +90.3% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +115.8% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.3ms | 0.3ms | 256 | 20 | 0.2ms | +82.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 3.3ms | 8.7ms | 256 | 20 | 6.5ms | +34.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

