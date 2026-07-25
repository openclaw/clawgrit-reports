# OpenClaw Source Performance

Generated: 2026-07-25T01:24:55.363Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6355.6ms | 6381.4ms | 6171.0ms | 3162.6ms | 6246.0ms | 44.3ms | 915.8MB | 1.301 |
| skipChannels | gateway, skip channels | 6700.4ms | 6959.2ms | 6658.8ms | 3411.0ms | 3461.1ms | 47.9ms | 919.4MB | 1.352 |
| oneInternalHook | gateway, one configured internal hook | 4654.6ms | 6570.8ms | 4654.4ms | 4521.2ms | 4566.3ms | 44.8ms | 963.2MB | 1.304 |
| allInternalHooks | gateway, all internal hooks | 4476.3ms | 6669.5ms | 4476.1ms | 4402.5ms | 4445.2ms | 43.0ms | 976.1MB | 1.350 |
| fiftyPlugins | gateway, 50 manifest plugins | 8489.9ms | 8543.6ms | 8489.8ms | 4357.1ms | 4438.9ms | 42.3ms | 1133.0MB | 1.205 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8535.6ms | 8694.6ms | 8535.5ms | 4277.6ms | 4367.4ms | 43.9ms | 1074.3MB | 1.265 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| memory-lancedb | 539.2MB | 492.8MB | ok |
| codex | 519.9MB | 473.5MB | ok |
| active-memory | 517.6MB | 471.2MB | ok |
| voice-call | 515.3MB | 468.9MB | ok |
| migrate-hermes | 510.1MB | 463.6MB | ok |
| llm-task | 508.0MB | 461.5MB | ok |
| google-meet | 504.5MB | 458.0MB | ok |
| workboard | 504.0MB | 457.5MB | ok |
| anthropic | 503.5MB | 457.0MB | ok |
| teams-meetings | 503.2MB | 456.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4038.3ms | 4095.3ms |
| default | post-ready.agent-runtime-plugins.total | 4027.2ms | 4080.1ms |
| default | post-attach.update-check.total | 4024.2ms | 4076.2ms |
| default | post-attach.update-sentinel.total | 4015.1ms | 4064.4ms |
| default | sidecars.restart-sentinel.total | 4013.9ms | 4062.8ms |
| skipChannels | sidecars.session-locks.total | 4290.5ms | 4453.1ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4288.7ms | 4451.3ms |
| skipChannels | post-attach.update-sentinel.total | 4283.7ms | 4446.3ms |
| skipChannels | sidecars.restart-sentinel.total | 4282.5ms | 4445.1ms |
| skipChannels | sidecars.ready.total | 4265.0ms | 4427.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3444.1ms | 3526.4ms |
| oneInternalHook | sidecars.session-locks.total | 2940.9ms | 2940.9ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2939.2ms | 2939.2ms |
| oneInternalHook | post-attach.update-sentinel.total | 2934.8ms | 2934.8ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2933.7ms | 2933.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3346.6ms | 3373.1ms |
| allInternalHooks | sidecars.session-locks.total | 2942.7ms | 2942.7ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2941.1ms | 2941.1ms |
| allInternalHooks | post-attach.update-sentinel.total | 2936.7ms | 2936.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2935.6ms | 2935.6ms |
| fiftyPlugins | sidecars.session-locks.total | 4922.8ms | 5043.1ms |
| fiftyPlugins | post-ready.maintenance.total | 4831.7ms | 4943.8ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4793.3ms | 4900.4ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4595.2ms | 4668.2ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4594.1ms | 4666.9ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4827.7ms | 4981.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4734.4ms | 4886.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4695.7ms | 4847.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4487.4ms | 4626.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4486.4ms | 4625.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10656.0ms | 0.000 | 2230.2MB | 1114.5MB | -1115.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10009.0ms | 0.200 | 823.7MB | 1084.0MB | 260.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9627.0ms | 0.208 | 855.1MB | 1105.6MB | 250.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3561.7ms | 3749.5ms | 62.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 785.1ms | 814.3ms | 61.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 106.5ms |

## Observations

No data.

