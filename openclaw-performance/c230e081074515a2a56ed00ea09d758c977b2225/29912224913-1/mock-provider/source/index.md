# OpenClaw Source Performance

Generated: 2026-07-22T10:37:18.185Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5584.0ms | 5646.5ms | 5584.0ms | 2714.8ms | 5497.8ms | 39.8ms | 885.8MB | 1.262 |
| skipChannels | gateway, skip channels | 2876.8ms | 2879.9ms | 2876.4ms | 2793.2ms | 2841.9ms | 40.7ms | 887.8MB | 1.410 |
| oneInternalHook | gateway, one configured internal hook | 6522.9ms | 6534.3ms | 6522.8ms | 4239.5ms | 4283.6ms | 44.9ms | 958.5MB | 1.254 |
| allInternalHooks | gateway, all internal hooks | 4440.5ms | 6691.5ms | 4440.3ms | 4304.3ms | 4359.6ms | 43.1ms | 933.2MB | 1.351 |
| fiftyPlugins | gateway, 50 manifest plugins | 6781.2ms | 6955.2ms | 6781.1ms | 3957.2ms | 4030.4ms | 40.0ms | 1161.1MB | 1.294 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 6979.8ms | 7202.9ms | 6979.7ms | 3885.0ms | 3979.4ms | 41.7ms | 1143.4MB | 1.289 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| teams-meetings | 529.6MB | 483.2MB | ok |
| migrate-hermes | 521.5MB | 475.1MB | ok |
| google-meet | 512.4MB | 466.0MB | ok |
| zoom-meetings | 512.2MB | 465.7MB | ok |
| active-memory | 511.3MB | 464.9MB | ok |
| workboard | 508.4MB | 461.9MB | ok |
| llm-task | 505.9MB | 459.4MB | ok |
| anthropic | 505.6MB | 459.1MB | ok |
| codex | 505.4MB | 458.9MB | ok |
| memory-lancedb | 504.9MB | 458.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3611.0ms | 3638.4ms |
| default | post-ready.agent-runtime-plugins.total | 3579.1ms | 3617.6ms |
| default | post-attach.update-check.total | 3575.5ms | 3615.0ms |
| default | post-attach.update-sentinel.total | 3568.0ms | 3607.2ms |
| default | sidecars.restart-sentinel.total | 3567.1ms | 3606.2ms |
| skipChannels | sidecars.internal-hooks.total | 893.5ms | 925.1ms |
| skipChannels | memory.ready.rssMb | 858.8ms | 865.5ms |
| skipChannels | post-attach.update-check.total | 829.8ms | 847.0ms |
| skipChannels | ready.total | 814.7ms | 832.5ms |
| skipChannels | runtime.post-attach.total | 813.3ms | 831.0ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3252.5ms | 3334.1ms |
| oneInternalHook | sidecars.session-locks.total | 2942.4ms | 2968.4ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2940.4ms | 2965.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 2935.0ms | 2955.4ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2933.8ms | 2954.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3333.4ms | 3369.6ms |
| allInternalHooks | sidecars.session-locks.total | 3059.8ms | 3059.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3057.7ms | 3057.7ms |
| allInternalHooks | post-attach.update-sentinel.total | 3052.7ms | 3052.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3051.6ms | 3051.6ms |
| fiftyPlugins | sidecars.session-locks.total | 3562.9ms | 3685.4ms |
| fiftyPlugins | post-ready.maintenance.total | 3487.3ms | 3606.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3473.2ms | 3593.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3270.3ms | 3381.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3269.3ms | 3380.5ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3614.7ms | 3824.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3536.1ms | 3747.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3522.6ms | 3734.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3313.7ms | 3529.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3312.7ms | 3528.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10223.0ms | 0.000 | 2409.4MB | 959.7MB | -1449.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9614.0ms | 0.208 | 851.9MB | 936.2MB | 84.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9554.0ms | 0.105 | 860.1MB | 937.0MB | 76.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3291.5ms | 3383.9ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 873.8ms | 934.8ms | 60.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.1ms | 68.0ms |

## Observations

No data.

