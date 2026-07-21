# OpenClaw Source Performance

Generated: 2026-07-21T21:01:47.711Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5460.4ms | 5565.5ms | 5460.2ms | 3003.1ms | 5359.2ms | 47.7ms | 915.3MB | 1.314 |
| skipChannels | gateway, skip channels | 3094.8ms | 3159.4ms | 3094.3ms | 3012.6ms | 3058.8ms | 47.5ms | 893.2MB | 1.320 |
| oneInternalHook | gateway, one configured internal hook | 6181.5ms | 6208.8ms | 6181.4ms | 4486.4ms | 4537.2ms | 45.5ms | 950.8MB | 1.340 |
| allInternalHooks | gateway, all internal hooks | 6557.7ms | 6602.8ms | 6557.6ms | 4918.0ms | 4981.5ms | 52.7ms | 950.1MB | 1.226 |
| fiftyPlugins | gateway, 50 manifest plugins | 6799.4ms | 6876.3ms | 6799.3ms | 4405.5ms | 4492.1ms | 42.3ms | 1111.2MB | 1.309 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7429.3ms | 8220.1ms | 7429.2ms | 4478.8ms | 4566.3ms | 54.3ms | 1091.3MB | 1.322 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 539.4MB | 492.9MB | ok |
| llm-task | 509.2MB | 462.7MB | ok |
| codex | 507.6MB | 461.2MB | ok |
| google-meet | 506.5MB | 460.0MB | ok |
| teams-meetings | 506.1MB | 459.6MB | ok |
| memory-lancedb | 505.9MB | 459.5MB | ok |
| active-memory | 505.8MB | 459.4MB | ok |
| workboard | 504.2MB | 457.7MB | ok |
| migrate-hermes | 503.3MB | 456.9MB | ok |
| anthropic | 503.2MB | 456.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3236.6ms | 3263.8ms |
| default | post-ready.agent-runtime-plugins.total | 3216.9ms | 3243.9ms |
| default | post-attach.update-check.total | 3213.8ms | 3241.1ms |
| default | post-attach.update-sentinel.total | 3205.4ms | 3232.7ms |
| default | sidecars.restart-sentinel.total | 3204.2ms | 3231.4ms |
| skipChannels | sidecars.internal-hooks.total | 933.2ms | 976.3ms |
| skipChannels | post-attach.update-check.total | 888.3ms | 939.4ms |
| skipChannels | ready.total | 871.6ms | 923.4ms |
| skipChannels | runtime.post-attach.total | 870.0ms | 921.9ms |
| skipChannels | post-attach.log.total | 868.8ms | 920.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3450.8ms | 3488.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2808.1ms | 2843.9ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2781.1ms | 2817.2ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2780.2ms | 2816.2ms |
| oneInternalHook | sidecars.session-locks.total | 2389.4ms | 2412.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3771.7ms | 3864.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 3045.2ms | 3070.8ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 3017.5ms | 3040.3ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 3016.5ms | 3039.3ms |
| allInternalHooks | sidecars.session-locks.total | 2426.9ms | 2573.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3243.1ms | 3332.3ms |
| fiftyPlugins | sidecars.session-locks.total | 3214.0ms | 3241.0ms |
| fiftyPlugins | post-ready.maintenance.total | 3134.5ms | 3157.0ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3121.2ms | 3142.9ms |
| fiftyPlugins | post-attach.update-sentinel.total | 2918.9ms | 2951.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3596.8ms | 3720.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3298.6ms | 4502.7ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3210.8ms | 4364.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3193.6ms | 4334.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 2981.1ms | 3432.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11004.0ms | 0.000 | 2439.2MB | 932.3MB | -1506.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10258.0ms | 0.097 | 854.8MB | 941.7MB | 86.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9968.0ms | 0.201 | 851.5MB | 909.9MB | 58.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3781.2ms | 3837.3ms | 60.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 871.2ms | 879.7ms | 60.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.0MB | 0.0MB | 0.0ms | 72.9ms |

## Observations

No data.

