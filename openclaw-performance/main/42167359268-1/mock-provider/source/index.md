# OpenClaw Source Performance

Generated: 2026-11-06T05:27:44.843Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6279.6ms | 7226.1ms | 4689.0ms | 5613.4ms | 6273.4ms | 765.0ms | 1281.3MB | 1.439 |
| skipChannels | gateway, skip channels | 6873.8ms | 7316.7ms | 4835.0ms | 6033.4ms | 6859.6ms | 593.0ms | 1242.1MB | 1.474 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4858.2ms | 6330.6ms | 3763.4ms | 4369.1ms | 4854.3ms | 557.4ms | 1257.6MB | 1.449 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5106.5ms | 5110.0ms | 3806.2ms | 4470.4ms | 5094.3ms | 527.0ms | 1272.9MB | 1.567 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5881.1ms | 5974.9ms | 4264.2ms | 5050.4ms | 5860.7ms | 572.8ms | 1271.7MB | 1.530 |
| oneInternalHook | gateway, one configured internal hook | 5882.2ms | 5908.4ms | 4231.2ms | 5178.3ms | 5862.7ms | 591.0ms | 1279.3MB | 1.554 |
| allInternalHooks | gateway, all internal hooks | 5601.7ms | 5746.8ms | 4026.9ms | 4901.1ms | 5583.1ms | 568.3ms | 1291.9MB | 1.566 |
| fiftyPlugins | gateway, 50 manifest plugins | 5026.2ms | 5124.5ms | 3690.1ms | 4521.6ms | 5015.5ms | 503.2ms | 1266.6MB | 1.409 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4723.0ms | 4811.9ms | 3667.0ms | 4262.4ms | 4695.4ms | 494.4ms | 1264.1MB | 1.482 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1239.3MB | 1281.3MB | +42.0MB (+3.4%) | +2.3MB (+0.7%) | stable |
| gateway boot | skipChannels | 1242.7MB | 1242.1MB | -0.5MB (-0.0%) | +6.6MB (+2.9%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1250.1MB | 1257.6MB | +7.6MB (+0.6%) | +2.7MB (+1.2%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1260.4MB | 1272.9MB | +12.6MB (+1.0%) | +2.8MB (+1.3%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1273.8MB | 1271.7MB | -2.1MB (-0.2%) | +9.5MB (+3.7%) | stable |
| gateway boot | oneInternalHook | 1268.5MB | 1279.3MB | +10.8MB (+0.8%) | +12.6MB (+5.7%) | stable |
| gateway boot | allInternalHooks | 1276.6MB | 1291.9MB | +15.3MB (+1.2%) | +27.7MB (+12.5%) | stable |
| gateway boot | fiftyPlugins | 1254.7MB | 1266.6MB | +11.8MB (+0.9%) | +3.2MB (+1.4%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1281.8MB | 1264.1MB | -17.7MB (-1.4%) | +12.8MB (+5.8%) | stable |
| cli | gatewayHealthJsonWarmState | 67.3MiB | 67.0MiB | -0.3MiB (-0.5%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.2MiB | 67.4MiB | +0.3MiB (+0.4%) | n/a | stable |
| cli | configGetGatewayPort | 67.6MiB | 67.5MiB | -0.1MiB (-0.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | -1.1MB | 13.0MB | +14.1MB (-1318.7%) | n/a | stable |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 180 bundled plugins | 564.1MB | 519.8MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 398.2MB | 353.8MB | ok |
| knowledge | 387.1MB | 342.8MB | ok |
| active-memory | 383.6MB | 339.3MB | ok |
| workboard | 377.1MB | 332.7MB | ok |
| agentsapi | 342.0MB | 297.7MB | ok |
| muse | 336.2MB | 291.9MB | ok |
| policy | 334.0MB | 289.7MB | ok |
| team-reports | 330.2MB | 285.9MB | ok |
| admin-http-rpc | 318.5MB | 274.2MB | ok |
| clickclack | 314.1MB | 269.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 6021.0ms | 6738.9ms |
| default | process.bootstrap | 3099.7ms | 3605.8ms |
| default | cli.main.gateway-run-bootstrap | 1186.2ms | 1242.6ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 1186.2ms | 1242.6ms |
| default | cli.command.config-ready | 1184.6ms | 1240.8ms |
| skipChannels | cli.main.gateway-run-parse | 6346.4ms | 6501.7ms |
| skipChannels | process.bootstrap | 2928.0ms | 3584.7ms |
| skipChannels | cli.main.gateway-run-bootstrap | 947.9ms | 1231.8ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 947.9ms | 1231.8ms |
| skipChannels | cli.command.config-ready | 946.4ms | 1230.0ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4337.0ms | 5468.8ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2378.7ms | 3645.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 796.3ms | 1249.1ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 796.3ms | 1249.1ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 794.8ms | 1247.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 4521.9ms | 4597.9ms |
| preparedRuntimeScaleOne | process.bootstrap | 2481.6ms | 2579.9ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 834.8ms | 894.8ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 834.8ms | 894.8ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 833.6ms | 893.3ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 5299.1ms | 5398.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 2694.7ms | 2752.4ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 942.1ms | 977.1ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 942.1ms | 977.1ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 940.5ms | 975.3ms |
| oneInternalHook | cli.main.gateway-run-parse | 5291.8ms | 5314.5ms |
| oneInternalHook | process.bootstrap | 2722.0ms | 2745.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 931.8ms | 939.5ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 931.8ms | 939.5ms |
| oneInternalHook | cli.command.config-ready | 930.5ms | 937.6ms |
| allInternalHooks | cli.main.gateway-run-parse | 5070.5ms | 5185.4ms |
| allInternalHooks | process.bootstrap | 2603.3ms | 2685.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 883.2ms | 929.4ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 883.2ms | 929.4ms |
| allInternalHooks | cli.command.config-ready | 881.8ms | 928.0ms |
| fiftyPlugins | cli.main.gateway-run-parse | 4570.5ms | 4659.9ms |
| fiftyPlugins | process.bootstrap | 2410.0ms | 2436.5ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 828.0ms | 836.2ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 828.0ms | 836.2ms |
| fiftyPlugins | cli.command.config-ready | 826.8ms | 834.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4221.1ms | 4344.9ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2367.5ms | 2438.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 799.0ms | 849.7ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 799.0ms | 849.7ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 797.8ms | 848.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12108.0ms | 0.413 | 2026.3MB | 2061.2MB | 34.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12392.0ms | 0.484 | 2024.2MB | 2146.9MB | 122.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11407.0ms | 0.351 | 2281.6MB | 2163.2MB | -118.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 654.9ms | 664.0ms | 67.0MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 649.4ms | 662.1ms | 67.4MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 749.8ms | 762.8ms | 67.5MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 39 | 40 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 296.7ms |
| baseline | v2 | smoke | 3.53.4 | 39 | 40 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 299.7ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -9.1% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.6ms | 1.6ms | 1000 | 20 | 1.7ms | -7.6% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.5ms | -6.9% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.4ms | -21.1% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -24.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -10.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -6.4% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -14.1% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.4ms | -14.5% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -8.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.2ms | 256 | 20 | 0.2ms | -3.2% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.8ms | 4.3ms | 256 | 20 | 4.4ms | -3.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

