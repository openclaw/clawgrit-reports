# OpenClaw Source Performance

Generated: 2026-07-22T10:27:21.378Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5901.2ms | 5974.1ms | 5901.1ms | 2826.1ms | 5815.8ms | 43.3ms | 909.5MB | 1.339 |
| skipChannels | gateway, skip channels | 2830.4ms | 2978.4ms | 2830.0ms | 2752.2ms | 2797.4ms | 43.0ms | 878.6MB | 1.440 |
| oneInternalHook | gateway, one configured internal hook | 7195.2ms | 7556.4ms | 7195.2ms | 4681.2ms | 4745.7ms | 44.6ms | 956.4MB | 1.323 |
| allInternalHooks | gateway, all internal hooks | 6750.5ms | 8305.2ms | 6750.4ms | 4337.4ms | 4376.2ms | 52.3ms | 953.5MB | 1.367 |
| fiftyPlugins | gateway, 50 manifest plugins | 7442.1ms | 7521.3ms | 7442.1ms | 4314.2ms | 4402.6ms | 48.1ms | 1124.5MB | 1.225 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7092.1ms | 7275.5ms | 7092.1ms | 3909.2ms | 3999.7ms | 42.1ms | 1120.0MB | 1.277 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 517.1MB | 470.6MB | ok |
| zoom-meetings | 516.3MB | 469.7MB | ok |
| workboard | 510.9MB | 464.3MB | ok |
| codex | 508.4MB | 461.9MB | ok |
| teams-meetings | 507.8MB | 461.2MB | ok |
| memory-lancedb | 506.7MB | 460.2MB | ok |
| google-meet | 503.5MB | 456.9MB | ok |
| voice-call | 503.4MB | 456.8MB | ok |
| anthropic | 503.3MB | 456.7MB | ok |
| llm-task | 502.6MB | 456.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3784.0ms | 3846.8ms |
| default | post-ready.agent-runtime-plugins.total | 3764.9ms | 3828.4ms |
| default | post-attach.update-check.total | 3762.4ms | 3825.7ms |
| default | post-attach.update-sentinel.total | 3754.4ms | 3817.6ms |
| default | sidecars.restart-sentinel.total | 3753.4ms | 3816.5ms |
| skipChannels | sidecars.internal-hooks.total | 904.7ms | 939.2ms |
| skipChannels | memory.ready.rssMb | 859.1ms | 862.3ms |
| skipChannels | post-attach.update-check.total | 830.7ms | 865.7ms |
| skipChannels | ready.total | 816.4ms | 851.8ms |
| skipChannels | runtime.post-attach.total | 815.1ms | 850.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3578.6ms | 3705.7ms |
| oneInternalHook | sidecars.session-locks.total | 3275.7ms | 3515.1ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3273.0ms | 3512.2ms |
| oneInternalHook | post-attach.update-sentinel.total | 3261.0ms | 3499.6ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3259.8ms | 3498.2ms |
| allInternalHooks | sidecars.session-locks.total | 3532.1ms | 3934.2ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3529.6ms | 3931.3ms |
| allInternalHooks | post-attach.update-sentinel.total | 3521.7ms | 3920.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3520.5ms | 3919.0ms |
| allInternalHooks | sidecars.ready.total | 3497.6ms | 3898.2ms |
| fiftyPlugins | sidecars.session-locks.total | 3970.1ms | 4094.7ms |
| fiftyPlugins | post-ready.maintenance.total | 3887.1ms | 4003.2ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 3871.5ms | 3988.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 3653.1ms | 3734.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 3651.7ms | 3733.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3713.3ms | 3724.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3630.3ms | 3651.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3615.0ms | 3638.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3395.1ms | 3440.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3394.2ms | 3439.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10299.0ms | 0.000 | 2436.8MB | 961.8MB | -1475.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9743.0ms | 0.205 | 858.3MB | 938.9MB | 80.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10288.0ms | 0.194 | 864.4MB | 941.0MB | 76.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3344.8ms | 3642.2ms | 60.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 771.2ms | 771.9ms | 60.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 66.1ms |

## Observations

No data.

