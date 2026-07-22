# OpenClaw Source Performance

Generated: 2026-07-22T07:52:23.210Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5987.1ms | 6059.2ms | 5987.0ms | 2997.6ms | 5895.7ms | 43.9ms | 914.9MB | 1.336 |
| skipChannels | gateway, skip channels | 3107.3ms | 5825.3ms | 2887.9ms | 2805.8ms | 2857.0ms | 48.6ms | 879.5MB | 1.385 |
| oneInternalHook | gateway, one configured internal hook | 6717.6ms | 7349.8ms | 6717.4ms | 4367.2ms | 4418.8ms | 45.5ms | 953.8MB | 1.225 |
| allInternalHooks | gateway, all internal hooks | 4128.9ms | 4237.4ms | 4128.6ms | 4057.3ms | 4097.3ms | 43.7ms | 937.1MB | 1.223 |
| fiftyPlugins | gateway, 50 manifest plugins | 7191.0ms | 7487.3ms | 7190.9ms | 4136.5ms | 4210.1ms | 42.3ms | 1125.1MB | 1.259 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6846.4ms | 7220.0ms | 6846.3ms | 3816.1ms | 3907.6ms | 45.3ms | 1149.8MB | 1.315 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 526.9MB | 480.3MB | ok |
| teams-meetings | 514.7MB | 468.1MB | ok |
| zoom-meetings | 512.6MB | 466.0MB | ok |
| codex | 511.3MB | 464.7MB | ok |
| llm-task | 509.8MB | 463.3MB | ok |
| active-memory | 507.9MB | 461.3MB | ok |
| voice-call | 504.7MB | 458.1MB | ok |
| memory-lancedb | 504.4MB | 457.9MB | ok |
| anthropic | 503.4MB | 456.8MB | ok |
| migrate-hermes | 502.5MB | 455.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3783.2ms | 3905.9ms |
| default | post-ready.agent-runtime-plugins.total | 3762.4ms | 3897.2ms |
| default | post-attach.update-check.total | 3759.5ms | 3894.0ms |
| default | post-attach.update-sentinel.total | 3751.2ms | 3884.6ms |
| default | sidecars.restart-sentinel.total | 3750.1ms | 3883.2ms |
| skipChannels | sidecars.session-locks.total | 3794.2ms | 3794.2ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3792.0ms | 3792.0ms |
| skipChannels | post-attach.update-sentinel.total | 3788.0ms | 3788.0ms |
| skipChannels | sidecars.restart-sentinel.total | 3787.1ms | 3787.1ms |
| skipChannels | sidecars.ready.total | 3773.2ms | 3773.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3325.5ms | 3641.7ms |
| oneInternalHook | sidecars.session-locks.total | 3050.2ms | 3354.6ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3048.5ms | 3352.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 3043.1ms | 3346.4ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3042.0ms | 3345.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3123.2ms | 3183.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2562.0ms | 2616.6ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2537.9ms | 2592.8ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2537.1ms | 2591.9ms |
| allInternalHooks | memory.ready.rssMb | 911.9ms | 919.6ms |
| fiftyPlugins | sidecars.session-locks.total | 3845.8ms | 3941.8ms |
| fiftyPlugins | post-ready.maintenance.total | 3758.7ms | 3849.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3742.6ms | 3835.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3521.2ms | 3553.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3520.3ms | 3552.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3528.0ms | 3772.7ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3450.5ms | 3691.9ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3436.8ms | 3676.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3230.9ms | 3376.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3229.9ms | 3375.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9857.0ms | 0.000 | 2433.0MB | 951.4MB | -1481.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9581.0ms | 0.104 | 852.6MB | 933.0MB | 80.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9477.0ms | 0.106 | 855.7MB | 931.9MB | 76.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3299.4ms | 3422.1ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 723.5ms | 745.4ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 59.5ms |

## Observations

No data.

