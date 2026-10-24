# OpenClaw Source Performance

Generated: 2026-10-24T05:32:33.055Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5301.0ms | 5330.0ms | 3057.6ms | 3608.3ms | 5298.7ms | 241.6ms | 1907.6MB | 1.876 |
| skipChannels | gateway, skip channels | 5241.9ms | 5262.1ms | 3039.8ms | 3626.2ms | 5219.2ms | 239.8ms | 1896.7MB | 1.742 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 5101.0ms | 5105.2ms | 3048.5ms | 3589.7ms | 5076.5ms | 240.9ms | 2031.1MB | 1.772 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 5233.7ms | 5261.4ms | 3044.1ms | 3602.0ms | 5209.0ms | 243.0ms | 1968.4MB | 1.730 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 6114.1ms | 6172.3ms | 3103.7ms | 3677.1ms | 6087.4ms | 242.8ms | 2146.3MB | 1.963 |
| oneInternalHook | gateway, one configured internal hook | 5257.3ms | 5307.8ms | 3040.2ms | 3645.6ms | 5228.0ms | 242.4ms | 1919.8MB | 1.727 |
| allInternalHooks | gateway, all internal hooks | 5270.3ms | 5278.9ms | 3063.7ms | 3658.7ms | 5249.1ms | 242.2ms | 1925.7MB | 1.709 |
| fiftyPlugins | gateway, 50 manifest plugins | 12055.6ms | 12247.3ms | 3078.3ms | 10499.1ms | 12055.2ms | 245.1ms | 4525.5MB | 1.581 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5000.9ms | 5027.2ms | 3058.3ms | 3445.3ms | 4996.8ms | 243.8ms | 1969.1MB | 1.802 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1901.8MB | 1907.6MB | +5.8MB (+0.3%) | -7.4MB (-2.3%) | stable |
| gateway boot | skipChannels | 1896.1MB | 1896.7MB | +0.6MB (+0.0%) | +7.7MB (+3.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 2022.5MB | 2031.1MB | +8.6MB (+0.4%) | +38.7MB (+19.0%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1926.5MB | 1968.4MB | +41.9MB (+2.2%) | +2.3MB (+1.0%) | stable |
| gateway boot | preparedRuntimeScaleMany | 2312.0MB | 2146.3MB | -165.6MB (-7.2%) | -28.9MB (-11.2%) | stable |
| gateway boot | oneInternalHook | 1959.1MB | 1919.8MB | -39.3MB (-2.0%) | +32.7MB (+13.1%) | stable |
| gateway boot | allInternalHooks | 1927.0MB | 1925.7MB | -1.3MB (-0.1%) | +10.0MB (+4.1%) | stable |
| gateway boot | fiftyPlugins | 4503.5MB | 4525.5MB | +22.0MB (+0.5%) | +11.0MB (+4.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1882.0MB | 1969.1MB | +87.0MB (+4.6%) | +46.8MB (+22.8%) | stable |
| cli | gatewayHealthJsonWarmState | 74.3MiB | 74.3MiB | +0.0MiB (+0.1%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 74.7MiB | 74.5MiB | -0.3MiB (-0.4%) | n/a | stable |
| cli | configGetGatewayPort | 74.1MiB | 74.7MiB | +0.5MiB (+0.7%) | n/a | stable |
| mock hello | gateway RSS delta avg | 215.0MB | 73.2MB | -141.7MB (-65.9%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.5MB | 0.0MB | ok |
| all 173 bundled plugins | 572.1MB | 527.6MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 390.6MB | 346.1MB | ok |
| active-memory | 390.1MB | 345.6MB | ok |
| agentsapi | 343.7MB | 299.2MB | ok |
| muse | 340.0MB | 295.5MB | ok |
| policy | 339.4MB | 294.9MB | ok |
| voice-call | 331.8MB | 287.3MB | ok |
| opencode | 318.2MB | 273.7MB | ok |
| copilot | 317.5MB | 273.0MB | ok |
| clickclack | 313.9MB | 269.4MB | ok |
| deepinfra | 308.9MB | 264.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 5470.3ms | 5606.6ms |
| default | process.bootstrap | 1949.2ms | 1963.9ms |
| default | sidecars.channels | 1233.9ms | 1290.1ms |
| default | cli.main.gateway-run-bootstrap | 730.4ms | 730.4ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 730.4ms | 730.4ms |
| skipChannels | cli.main.gateway-run-parse | 5324.3ms | 5325.9ms |
| skipChannels | process.bootstrap | 1924.4ms | 1931.8ms |
| skipChannels | sidecars.channels | 1161.6ms | 1177.6ms |
| skipChannels | cli.main.gateway-run-bootstrap | 727.0ms | 729.3ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 727.0ms | 729.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 5055.4ms | 5298.0ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1953.7ms | 1953.7ms |
| preparedRuntimeCatalogStall | sidecars.channels | 1095.6ms | 1120.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 735.3ms | 741.8ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 735.3ms | 741.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 5330.7ms | 5330.9ms |
| preparedRuntimeScaleOne | process.bootstrap | 1934.8ms | 1943.2ms |
| preparedRuntimeScaleOne | sidecars.channels | 1131.5ms | 1165.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 721.8ms | 725.6ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 721.8ms | 725.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 6105.5ms | 6154.2ms |
| preparedRuntimeScaleMany | process.bootstrap | 1984.0ms | 2006.2ms |
| preparedRuntimeScaleMany | sidecars.channels | 1486.6ms | 1523.6ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery | 939.6ms | 975.3ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery-scan | 928.0ms | 961.4ms |
| oneInternalHook | cli.main.gateway-run-parse | 5357.1ms | 5463.4ms |
| oneInternalHook | process.bootstrap | 1936.2ms | 1974.2ms |
| oneInternalHook | sidecars.channels | 1100.8ms | 1143.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 732.5ms | 744.8ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 732.5ms | 744.8ms |
| allInternalHooks | cli.main.gateway-run-parse | 5434.9ms | 5457.6ms |
| allInternalHooks | process.bootstrap | 1945.3ms | 1970.0ms |
| allInternalHooks | sidecars.channels | 1119.3ms | 1142.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 733.7ms | 743.6ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 733.7ms | 743.6ms |
| fiftyPlugins | cli.main.gateway-run-parse | 12275.0ms | 12445.6ms |
| fiftyPlugins | plugins.runtime-post-bind | 7045.2ms | 7089.0ms |
| fiftyPlugins | plugins.gateway-load.loadMs | 7041.2ms | 7085.0ms |
| fiftyPlugins | process.bootstrap | 1981.7ms | 1982.1ms |
| fiftyPlugins | sidecars.channels | 1076.3ms | 1177.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 5089.0ms | 5155.7ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1951.3ms | 1965.6ms |
| fiftyStartupLazyPlugins | sidecars.channels | 1138.5ms | 1171.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 740.4ms | 748.2ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 740.4ms | 748.2ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10633.0ms | 0.282 | 1972.5MB | 2046.2MB | 73.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10726.0ms | 0.280 | 1991.2MB | 2061.2MB | 70.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10802.0ms | 0.278 | 1995.1MB | 2071.1MB | 76.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 515.2ms | 529.1ms | 74.3MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 480.4ms | 481.1ms | 74.5MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 561.1ms | 563.6ms | 74.7MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 31 | 32 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 255.0ms |
| baseline | v2 | smoke | 3.53.4 | 31 | 31 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 286.7ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -14.3% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.4ms | 1.4ms | 1000 | 20 | 1.6ms | -6.8% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.4ms | -6.9% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.4ms | -18.1% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +1.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -2.4% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -3.7% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -5.5% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.3ms | 675 | 20 | 0.3ms | -1.8% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -9.5% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | -0.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.7ms | 7.0ms | 256 | 20 | 2.8ms | +147.4% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

