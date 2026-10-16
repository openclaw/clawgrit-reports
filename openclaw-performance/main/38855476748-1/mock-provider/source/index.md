# OpenClaw Source Performance

Generated: 2026-10-16T05:34:08.100Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4575.0ms | 4642.9ms | 3250.6ms | 4090.9ms | 4502.4ms | 248.9ms | 1617.6MB | 1.317 |
| skipChannels | gateway, skip channels | 4581.6ms | 4596.7ms | 3279.2ms | 4129.9ms | 4529.2ms | 245.4ms | 1930.3MB | 1.334 |
| preparedRuntimeCatalogStall | gateway, prepared runtime with CPU-stalling live catalog | 4135.2ms | 4230.8ms | 3111.2ms | 3756.3ms | 4120.4ms | 230.5ms | 1991.8MB | 1.418 |
| preparedRuntimeScaleOne | gateway, prepared runtime scale with one agent | 4398.4ms | 5401.1ms | 3193.7ms | 3878.6ms | 4379.9ms | 242.0ms | 2026.0MB | 1.387 |
| preparedRuntimeScaleMany | gateway, prepared runtime scale with 11 shared-workspace agents and one distinct | 5535.4ms | 5618.7ms | 3799.1ms | 4725.9ms | 5491.7ms | 253.8ms | 2111.6MB | 1.445 |
| oneInternalHook | gateway, one configured internal hook | 4569.1ms | 4627.8ms | 3228.4ms | 4083.2ms | 4512.7ms | 241.7ms | 1905.7MB | 1.327 |
| allInternalHooks | gateway, all internal hooks | 4451.5ms | 4634.1ms | 3101.7ms | 3933.3ms | 4386.3ms | 246.9ms | 1876.4MB | 1.365 |
| fiftyPlugins | gateway, 50 manifest plugins | 4492.1ms | 4528.0ms | 3247.6ms | 4032.8ms | 4474.7ms | 242.2ms | 1920.1MB | 1.372 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4691.1ms | 5082.7ms | 3516.2ms | 4226.4ms | 4658.7ms | 242.4ms | 1985.0MB | 1.388 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1625.5MB | 1617.6MB | -7.9MB (-0.5%) | -9.3MB (-2.9%) | stable |
| gateway boot | skipChannels | 1953.7MB | 1930.3MB | -23.5MB (-1.2%) | +10.2MB (+4.2%) | stable |
| gateway boot | preparedRuntimeCatalogStall | 2041.5MB | 1991.8MB | -49.7MB (-2.4%) | +25.9MB (+11.5%) | stable |
| gateway boot | preparedRuntimeScaleOne | 2050.6MB | 2026.0MB | -24.6MB (-1.2%) | +8.8MB (+3.5%) | stable |
| gateway boot | preparedRuntimeScaleMany | 2177.7MB | 2111.6MB | -66.1MB (-3.0%) | +0.8MB (+0.3%) | stable |
| gateway boot | oneInternalHook | 1985.0MB | 1905.7MB | -79.3MB (-4.0%) | +10.3MB (+4.3%) | stable |
| gateway boot | allInternalHooks | 1917.5MB | 1876.4MB | -41.1MB (-2.1%) | +6.6MB (+2.7%) | stable |
| gateway boot | fiftyPlugins | 1935.5MB | 1920.1MB | -15.3MB (-0.8%) | +11.0MB (+4.6%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 2071.9MB | 1985.0MB | -86.9MB (-4.2%) | +11.5MB (+4.8%) | stable |
| cli | gatewayHealthJsonWarmState | 73.5MiB | 74.1MiB | +0.6MiB (+0.8%) | n/a | stable |
| cli | gatewayHealthJsonFreshState | 73.6MiB | 73.2MiB | -0.4MiB (-0.5%) | n/a | stable |
| cli | configGetGatewayPort | 73.7MiB | 73.6MiB | -0.1MiB (-0.2%) | n/a | stable |
| mock hello | gateway RSS delta avg | 821.2MB | 1036.2MB | +215.0MB (+26.2%) | n/a | watch |

## Bundled Plugin Import Memory

Per-plugin rows are isolated cold imports and are not additive. The combined row measures all selected bundled-plugin entrypoints in one process.

| measurement | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| empty Node process | 46.3MB | 0.0MB | ok |
| all 167 bundled plugins | 555.6MB | 509.4MB | ok |

| plugin | isolated max RSS | isolated delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 392.5MB | 346.3MB | ok |
| active-memory | 380.0MB | 333.8MB | ok |
| agentsapi | 339.5MB | 293.2MB | ok |
| muse | 336.8MB | 290.5MB | ok |
| copilot | 334.6MB | 288.3MB | ok |
| policy | 330.9MB | 284.6MB | ok |
| voice-call | 325.1MB | 278.9MB | ok |
| clickclack | 319.8MB | 273.6MB | ok |
| cloudflare-ai-gateway | 319.7MB | 273.5MB | ok |
| xai | 319.1MB | 272.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-parse | 5711.9ms | 5758.5ms |
| default | process.bootstrap | 1867.7ms | 1907.8ms |
| default | runtime.post-attach | 693.9ms | 707.6ms |
| default | sessions.projection | 586.3ms | 597.7ms |
| default | sidecars.main-session-recovery | 558.8ms | 568.1ms |
| skipChannels | cli.main.gateway-run-parse | 5611.7ms | 5692.5ms |
| skipChannels | process.bootstrap | 1847.1ms | 1931.2ms |
| skipChannels | sessions.projection | 584.9ms | 594.6ms |
| skipChannels | sidecars.main-session-recovery | 552.5ms | 568.5ms |
| skipChannels | sidecars.main-session-recovery-scan | 548.3ms | 564.3ms |
| preparedRuntimeCatalogStall | cli.main.gateway-run-parse | 5153.5ms | 5218.2ms |
| preparedRuntimeCatalogStall | process.bootstrap | 1757.4ms | 1838.1ms |
| preparedRuntimeCatalogStall | sessions.projection | 562.1ms | 611.7ms |
| preparedRuntimeCatalogStall | post-ready.maintenance | 561.4ms | 577.5ms |
| preparedRuntimeCatalogStall | sidecars.main-session-recovery | 539.0ms | 586.4ms |
| preparedRuntimeScaleOne | cli.main.gateway-run-parse | 5502.3ms | 6148.3ms |
| preparedRuntimeScaleOne | process.bootstrap | 1794.7ms | 2867.0ms |
| preparedRuntimeScaleOne | sessions.projection | 595.0ms | 601.1ms |
| preparedRuntimeScaleOne | sidecars.main-session-recovery | 568.4ms | 573.9ms |
| preparedRuntimeScaleOne | post-ready.maintenance | 565.7ms | 597.0ms |
| preparedRuntimeScaleMany | process.bootstrap | 1968.3ms | 2238.5ms |
| preparedRuntimeScaleMany | sessions.projection | 765.2ms | 772.4ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery | 719.9ms | 735.3ms |
| preparedRuntimeScaleMany | sidecars.main-session-recovery-scan | 714.5ms | 725.9ms |
| preparedRuntimeScaleMany | post-ready.maintenance | 693.1ms | 773.9ms |
| oneInternalHook | cli.main.gateway-run-parse | 5522.3ms | 5632.3ms |
| oneInternalHook | process.bootstrap | 1840.1ms | 1869.0ms |
| oneInternalHook | sessions.projection | 588.6ms | 594.2ms |
| oneInternalHook | sidecars.main-session-recovery | 563.2ms | 570.1ms |
| oneInternalHook | sidecars.main-session-recovery-scan | 559.1ms | 565.9ms |
| allInternalHooks | cli.main.gateway-run-parse | 5638.6ms | 5644.9ms |
| allInternalHooks | process.bootstrap | 1770.4ms | 1827.7ms |
| allInternalHooks | sessions.projection | 579.6ms | 594.5ms |
| allInternalHooks | sidecars.main-session-recovery | 552.1ms | 566.6ms |
| allInternalHooks | sidecars.main-session-recovery-scan | 548.1ms | 562.0ms |
| fiftyPlugins | cli.main.gateway-run-parse | 5576.4ms | 5772.9ms |
| fiftyPlugins | process.bootstrap | 1813.3ms | 1942.4ms |
| fiftyPlugins | sessions.projection | 558.3ms | 580.2ms |
| fiftyPlugins | post-ready.maintenance | 546.4ms | 560.1ms |
| fiftyPlugins | sidecars.main-session-recovery | 534.0ms | 555.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-parse | 5824.4ms | 6433.3ms |
| fiftyStartupLazyPlugins | process.bootstrap | 1943.9ms | 2202.6ms |
| fiftyStartupLazyPlugins | sessions.projection | 622.8ms | 699.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance | 607.9ms | 751.0ms |
| fiftyStartupLazyPlugins | sidecars.main-session-recovery | 599.5ms | 651.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11167.0ms | 0.895 | 1633.3MB | 2636.8MB | 1003.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10909.0ms | 0.825 | 1622.9MB | 2709.7MB | 1086.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10275.0ms | 0.876 | 1633.0MB | 2651.2MB | 1018.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

RSS metric: legacy-last-marker; values are MiB.

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJsonWarmState | gateway health --json (warm state) | 545.5ms | 878.8ms | 74.1MiB | code:0 x3 |
| gatewayHealthJsonFreshState | gateway health --json (fresh state) | 540.1ms | 564.8ms | 73.2MiB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 579.2ms | 606.6ms | 73.6MiB | code:0 x3 |

## SQLite State Smoke

| run | format | profile | SQLite | state schema | agent schema | state rows | agent rows | integrity | WAL before | WAL after | total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| current | v2 | smoke | 3.53.3 | 24 | 27 | 4100 | 1000 | ok | 3.3MB | 0.0MB | 314.3ms |
| baseline | v2 | smoke | 3.53.3 | 22 | 27 | 4100 | 1000 | ok | 3.5MB | 0.0MB | 305.9ms |

| scenario | database | rows | runs | p50 | p95 | baseline rows | baseline runs | baseline p95 | delta | plan/index |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cron.store.load | state | 13 | 20 | 0.0ms | 0.0ms | 13 | 20 | 0.0ms | -4.8% | indexes: idx_cron_jobs_store_order; full scans: none; temp sorts: none |
| task-runs.cron.list | state | 1000 | 20 | 1.5ms | 1.5ms | 1000 | 20 | 1.7ms | -8.3% | indexes: idx_task_runs_cron_runtime_order; full scans: none; temp sorts: none |
| task-runs.cron-source.list | state | 250 | 20 | 0.4ms | 0.5ms | 250 | 20 | 0.4ms | +13.1% | indexes: idx_task_runs_cron_source_order; full scans: none; temp sorts: none |
| delivery.pending.load | state | 696 | 20 | 0.4ms | 0.5ms | 696 | 20 | 0.3ms | +47.3% | indexes: idx_delivery_queue_pending; full scans: none; temp sorts: none |
| ingress.pending.first-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +59.8% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.seek-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +12.9% | indexes: idx_channel_ingress_pending; full scans: none; temp sorts: none |
| ingress.pending.id-page | state | 100 | 20 | 0.1ms | 0.1ms | 100 | 20 | 0.1ms | +29.9% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| ingress.pending.id-seek-page | state | 100 | 20 | 0.1ms | 0.2ms | 100 | 20 | 0.1ms | +45.2% | indexes: sqlite_autoindex_channel_ingress_events_1; full scans: none; temp sorts: none |
| plugin-state.namespace.live | state | 675 | 20 | 0.3ms | 0.4ms | 675 | 20 | 0.3ms | +56.4% | indexes: idx_plugin_state_listing; full scans: none; temp sorts: none |
| agent-cache.plugin-model-catalog.list | agent | 64 | 20 | 0.0ms | 0.0ms | 64 | 20 | 0.0ms | +5.0% | indexes: sqlite_autoindex_cache_entries_1; full scans: none; temp sorts: none |
| transcript.tail.metadata | agent | 256 | 20 | 0.1ms | 0.1ms | 256 | 20 | 0.1ms | +5.0% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |
| transcript.tail.payload | agent | 256 | 20 | 2.2ms | 4.3ms | 256 | 20 | 2.4ms | +79.7% | indexes: idx_agent_transcript_active_messages, sqlite_autoindex_transcript_events_1; full scans: none; temp sorts: none |

## Observations

No data.

