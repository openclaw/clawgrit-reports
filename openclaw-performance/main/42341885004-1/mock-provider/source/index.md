# OpenClaw Source Performance

Generated: 2026-11-07T05:25:42.169Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5204.2ms | 5619.7ms | 3573.3ms | 4490.8ms | 5186.3ms | 502.9ms | 1311.1MB | 1.424 |
| skipChannels | gateway, skip channels | 4967.5ms | 5028.3ms | 3568.2ms | 4392.0ms | 4948.7ms | 468.4ms | 1296.9MB | 1.447 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4467.9ms | 5152.2ms | 3459.6ms | 4043.9ms | 4461.2ms | 474.4ms | 1276.6MB | 1.359 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4928.9ms | 4988.8ms | 3688.5ms | 4348.9ms | 4918.3ms | 502.0ms | 1263.6MB | 1.439 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5388.9ms | 5665.6ms | 3880.9ms | 4652.2ms | 5373.0ms | 539.9ms | 1286.3MB | 1.412 |
| oneInternalHook | gateway, one configured internal hook | 5137.2ms | 5432.3ms | 3679.2ms | 4514.4ms | 5131.1ms | 497.3ms | 1305.8MB | 1.473 |
| allInternalHooks | gateway, all internal hooks | 5441.8ms | 5548.5ms | 3844.2ms | 4761.6ms | 5435.1ms | 522.7ms | 1293.7MB | 1.470 |
| fiftyPlugins | gateway, 50 manifest plugins | 4978.0ms | 5068.1ms | 3581.2ms | 4499.5ms | 4968.7ms | 479.9ms | 1298.2MB | 1.406 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4481.8ms | 4828.9ms | 3466.1ms | 4048.5ms | 4474.0ms | 477.8ms | 1267.8MB | 1.356 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1281.3MB | 1311.1MB | +29.8MB (+2.3%) | -24.5MB (-7.3%) | stable |
| gateway boot | skipChannels | 1242.1MB | 1296.9MB | +54.8MB (+4.4%) | -8.1MB (-3.5%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 1257.6MB | 1276.6MB | +19.0MB (+1.5%) | -0.9MB (-0.4%) | stable |
| gateway boot | preparedRuntimeScaleOne | 1272.9MB | 1263.6MB | -9.3MB (-0.7%) | -0.9MB (-0.4%) | stable |
| gateway boot | preparedRuntimeScaleMany | 1271.7MB | 1286.3MB | +14.5MB (+1.1%) | -10.4MB (-3.9%) | stable |
| gateway boot | oneInternalHook | 1279.3MB | 1305.8MB | +26.5MB (+2.1%) | +0.6MB (+0.3%) | stable |
| gateway boot | allInternalHooks | 1291.9MB | 1293.7MB | +1.9MB (+0.1%) | -24.1MB (-9.7%) | stable |
| gateway boot | fiftyPlugins | 1266.6MB | 1298.2MB | +31.6MB (+2.5%) | +0.5MB (+0.2%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1264.1MB | 1267.8MB | +3.6MB (+0.3%) | +1.9MB (+0.8%) | stable |
| cli | gatewayHealthJsonWarmState | 67.0MiB | 67.4MiB | +0.3MiB (+0.5%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 67.4MiB | 67.6MiB | +0.1MiB (+0.2%) | n/a | stable |
| cli | configGetGatewayPort | 67.5MiB | 67.2MiB | -0.3MiB (-0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | 13.0MB | -41.2MB | -54.3MB (-416.1%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.3MB | 0.0MB | ok |
| all 181 bundled plugins | 566.2MB | 521.8MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 403.6MB | 359.2MB | ok |
| knowledge | 388.0MB | 343.6MB | ok |
| active-memory | 384.4MB | 340.1MB | ok |
| workboard | 379.9MB | 335.6MB | ok |
| agentsapi | 343.0MB | 298.7MB | ok |
| policy | 342.4MB | 298.1MB | ok |
| muse | 330.3MB | 286.0MB | ok |
| team-reports | 328.2MB | 283.8MB | ok |
| admin-http-rpc | 322.5MB | 278.2MB | ok |
| clickclack | 318.9MB | 274.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4991.2ms | 5476.9ms |
| default | process.bootstrap | 2305.3ms | 2439.3ms |
| default | runtime.post-attach | 1043.3ms | 1122.9ms |
| default | cli.main.gateway-run-bootstrap | 787.8ms | 841.8ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 787.8ms | 841.8ms |
| skipChannels | cli.main.gateway-run-parse | 4523.7ms | 4567.0ms |
| skipChannels | process.bootstrap | 2217.6ms | 2327.7ms |
| skipChannels | cli.main.gateway-run-bootstrap | 761.2ms | 784.9ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 761.2ms | 784.9ms |
| skipChannels | cli.command.config-ready | 760.0ms | 783.6ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4008.9ms | 4767.2ms |
| preparedRuntimeCatalogStall | process.bootstrap | 2262.5ms | 2306.2ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 784.3ms | 800.9ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 784.3ms | 800.9ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 783.0ms | 799.5ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 4458.8ms | 4504.1ms |
| preparedRuntimeScaleOne | process.bootstrap | 2337.5ms | 2362.8ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 782.7ms | 804.7ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 782.7ms | 804.7ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 781.6ms | 803.5ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 4904.2ms | 5115.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 2471.7ms | 2607.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 876.9ms | 931.2ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 876.9ms | 931.2ms |
| preparedRuntimeScaleMany | cli.command.config-ready | 875.7ms | 929.7ms |
| oneInternalHook | cli.main.gateway-run-parse | 4673.0ms | 4954.9ms |
| oneInternalHook | process.bootstrap | 2348.9ms | 2486.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 816.1ms | 855.1ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 816.1ms | 855.1ms |
| oneInternalHook | cli.command.config-ready | 814.9ms | 853.8ms |
| allInternalHooks | cli.main.gateway-run-parse | 4956.6ms | 5020.6ms |
| allInternalHooks | process.bootstrap | 2411.9ms | 2595.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 812.5ms | 875.8ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 812.5ms | 875.8ms |
| allInternalHooks | cli.command.config-ready | 811.3ms | 874.2ms |
| fiftyPlugins | cli.main.gateway-run-parse | 4523.4ms | 4640.4ms |
| fiftyPlugins | process.bootstrap | 2303.8ms | 2326.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 797.8ms | 829.8ms |
| fiftyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 797.8ms | 829.8ms |
| fiftyPlugins | cli.command.config-ready | 796.6ms | 828.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4022.8ms | 4358.4ms |
| fiftyStartupLazyPlugins | process.bootstrap | 2259.2ms | 2372.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 793.1ms | 815.0ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 793.1ms | 815.0ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 791.8ms | 813.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10591.0ms | 0.378 | 2126.6MB | 2074.3MB | -52.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 12225.0ms | 0.245 | 2174.4MB | 2094.7MB | -79.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12030.0ms | 0.333 | 2090.5MB | 2098.9MB | 8.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 814.7ms | 883.5ms | 67.4MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 779.6ms | 849.4ms | 67.6MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 790.5ms | 847.2ms | 67.2MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.4 | 39 | 40 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 357.2ms |
| baseline | v2 | smoke | 3.53.4 | 39 | 40 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 296.7ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +45.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 2.1ms | 2.7ms | 1000 | 20 | 1.6ms | +65.2% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.6ms | 0.7ms | 250 | 20 | 0.5ms | +39.2% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.5ms | 0.6ms | 696 | 20 | 0.3ms | +85.2% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +62.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +55.7% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +61.5% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.2ms | 0.2ms | 100 | 20 | 0.1ms | +57.8% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.4ms | 0.5ms | 675 | 20 | 0.3ms | +69.7% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +69.6% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.2ms | 0.2ms | 256 | 20 | 0.2ms | +60.9% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.2ms | 8.3ms | 256 | 20 | 4.3ms | +96.1% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

