# OpenClaw Source Performance

Generated: 2026-10-17T05:32:08.922Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4121.9ms | 4129.4ms | 2986.7ms | 3636.5ms | 4047.6ms | 239.8ms | 1258.9MB | 1.219 |
| skipChannels | gateway, skip channels | 4173.0ms | 4203.0ms | 2977.7ms | 3682.1ms | 4130.8ms | 240.0ms | 1457.3MB | 1.428 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4079.8ms | 4160.5ms | 3007.7ms | 3719.5ms | 4060.1ms | 238.9ms | 1471.4MB | 1.235 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4174.1ms | 4239.0ms | 2988.8ms | 3709.7ms | 4164.0ms | 240.4ms | 1461.5MB | 1.415 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 4557.6ms | 4605.7ms | 3137.3ms | 3915.4ms | 4533.6ms | 245.1ms | 1496.3MB | 1.322 |
| oneInternalHook | gateway, one configured internal hook | 4389.3ms | 4615.4ms | 3151.9ms | 3870.1ms | 4318.2ms | 244.5ms | 1466.1MB | 1.370 |
| allInternalHooks | gateway, all internal hooks | 4383.5ms | 4941.3ms | 3127.4ms | 3845.8ms | 4324.9ms | 249.7ms | 1437.2MB | 1.417 |
| fiftyPlugins | gateway, 50 manifest plugins | 16273.4ms | 16930.4ms | 3569.2ms | 15718.4ms | 16255.1ms | 269.5ms | 4462.1MB | 1.418 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4245.2ms | 4511.3ms | 3278.0ms | 3782.2ms | 4234.1ms | 255.6ms | 1446.7MB | 1.413 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1617.6MB | 1258.9MB | -358.7MB (-22.2%) | +24.6MB (+7.8%) | improved |
| gateway boot | skipChannels | 1930.3MB | 1457.3MB | -473.0MB (-24.5%) | +10.9MB (+4.3%) | improved |
| gateway boot | preparedRuntimeCatalogStall | 1991.8MB | 1471.4MB | -520.4MB (-26.1%) | +10.7MB (+4.3%) | improved |
| gateway boot | preparedRuntimeScaleOne | 2026.0MB | 1461.5MB | -564.6MB (-27.9%) | +3.4MB (+1.3%) | improved |
| gateway boot | preparedRuntimeScaleMany | 2111.6MB | 1496.3MB | -615.4MB (-29.1%) | -11.4MB (-4.9%) | improved |
| gateway boot | oneInternalHook | 1905.7MB | 1466.1MB | -439.6MB (-23.1%) | +5.7MB (+2.3%) | improved |
| gateway boot | allInternalHooks | 1876.4MB | 1437.2MB | -439.2MB (-23.4%) | +11.6MB (+4.6%) | improved |
| gateway boot | fiftyPlugins | 1920.1MB | 4462.1MB | +2542.0MB (+132.4%) | +11.4MB (+4.5%) | watch |
| gateway boot | fiftyStartupLazyPlugins | 1985.0MB | 1446.7MB | -538.3MB (-27.1%) | +10.5MB (+4.2%) | improved |
| cli | gatewayHealthJsonWarmState | 74.1MiB | 73.9MiB | -0.2MiB (-0.2%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.2MiB | 73.4MiB | +0.2MiB (+0.3%) | n/a | stable |
| cli | configGetGatewayPort | 73.6MiB | 73.4MiB | -0.2MiB (-0.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 1036.2MB | 476.7MB | -559.4MB (-54.0%) | n/a | improved |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 44.5MB | 0.0MB | ok |
| all 169 bundled plugins | 557.9MB | 513.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 398.6MB | 354.1MB | ok |
| workboard | 396.9MB | 352.4MB | ok |
| muse | 345.9MB | 301.5MB | ok |
| agentsapi | 338.1MB | 293.6MB | ok |
| copilot | 336.6MB | 292.1MB | ok |
| voice-call | 336.0MB | 291.6MB | ok |
| policy | 334.7MB | 290.2MB | ok |
| deepinfra | 325.0MB | 280.5MB | ok |
| cloudflare-ai-gateway | 321.8MB | 277.3MB | ok |
| opencode | 318.8MB | 274.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 4174.5ms | 4193.0ms |
| default | process.bootstrap | 1762.7ms | 1794.2ms |
| default | runtime.post-attach | 651.5ms | 653.0ms |
| default | cli.main.gateway-run-bootstrap | 468.7ms | 488.4ms |
| default | process.bootstrap.cli.main.gateway-run-bootstrap | 468.7ms | 488.4ms |
| skipChannels | cli.main.gateway-run-parse | 4904.4ms | 4936.7ms |
| skipChannels | process.bootstrap | 1789.4ms | 1792.9ms |
| skipChannels | cli.main.gateway-run-bootstrap | 484.5ms | 484.7ms |
| skipChannels | process.bootstrap.cli.main.gateway-run-bootstrap | 484.5ms | 484.7ms |
| skipChannels | cli.command.config-ready | 483.1ms | 483.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 4783.1ms | 4888.6ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1798.7ms | 1813.5ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-bootstrap | 476.2ms | 492.3ms |
| preparedRuntimeCatalogStall | process.bootstrap.cli.main.gateway-run-bootstrap | 476.2ms | 492.3ms |
| preparedRuntimeCatalogStall | cli.command.config-ready | 475.1ms | 491.2ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 4916.1ms | 4968.7ms |
| preparedRuntimeScaleOne | process.bootstrap | 1787.6ms | 1789.1ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-bootstrap | 472.4ms | 481.9ms |
| preparedRuntimeScaleOne | process.bootstrap.cli.main.gateway-run-bootstrap | 472.4ms | 481.9ms |
| preparedRuntimeScaleOne | cli.command.config-ready | 471.1ms | 480.6ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-parse | 5594.8ms | 5752.5ms |
| preparedRuntimeScaleMany | process.bootstrap | 1895.8ms | 1898.7ms |
| preparedRuntimeScaleMany | sidecars.model-runtime | 533.2ms | 540.1ms |
| preparedRuntimeScaleMany | cli.main.gateway-run-bootstrap | 496.7ms | 501.0ms |
| preparedRuntimeScaleMany | process.bootstrap.cli.main.gateway-run-bootstrap | 496.7ms | 501.0ms |
| oneInternalHook | cli.main.gateway-run-parse | 5141.9ms | 5327.4ms |
| oneInternalHook | process.bootstrap | 1880.2ms | 1889.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 517.4ms | 530.5ms |
| oneInternalHook | process.bootstrap.cli.main.gateway-run-bootstrap | 517.4ms | 530.5ms |
| oneInternalHook | cli.command.config-ready | 516.2ms | 528.9ms |
| allInternalHooks | cli.main.gateway-run-parse | 5129.6ms | 5689.1ms |
| allInternalHooks | process.bootstrap | 1856.7ms | 1958.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 508.9ms | 515.4ms |
| allInternalHooks | process.bootstrap.cli.main.gateway-run-bootstrap | 508.9ms | 515.4ms |
| allInternalHooks | cli.command.config-ready | 507.4ms | 514.2ms |
| fiftyPlugins | cli.main.gateway-run-parse | 17047.3ms | 18032.7ms |
| fiftyPlugins | plugins.runtime-post-bind | 11504.2ms | 12098.7ms |
| fiftyPlugins | plugins.gateway-load.loadMs | 11499.0ms | 12093.8ms |
| fiftyPlugins | process.bootstrap | 2096.5ms | 2127.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 576.0ms | 592.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 4977.2ms | 5218.8ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1996.9ms | 1999.4ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 530.2ms | 557.3ms |
| fiftyStartupLazyPlugins | process.bootstrap.cli.main.gateway-run-bootstrap | 530.2ms | 557.3ms |
| fiftyStartupLazyPlugins | cli.command.config-ready | 528.8ms | 556.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10130.0ms | 0.592 | 1625.6MB | 2108.4MB | 482.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10006.0ms | 0.600 | 1647.6MB | 2118.1MB | 470.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10067.0ms | 0.596 | 1636.5MB | 2113.5MB | 477.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 526.0ms | 539.3ms | 73.9MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 471.2ms | 489.0ms | 73.4MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 555.4ms | 568.2ms | 73.4MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 26 | 28 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 256.4ms |
| baseline | v2 | smoke | 3.53.3 | 24 | 27 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 314.3ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | +20.0% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.3ms | 1.3ms | 1000 | 20 | 1.5ms | -13.8% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.4ms | 250 | 20 | 0.5ms | -19.6% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.3ms | 0.3ms | 696 | 20 | 0.5ms | -26.8% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -31.6% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -2.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | -30.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.2ms | -35.1% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.2ms | 0.3ms | 675 | 20 | 0.4ms | -38.2% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | -9.5% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | -7.5% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 1.7ms | 4.5ms | 256 | 20 | 4.3ms | +4.6% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

