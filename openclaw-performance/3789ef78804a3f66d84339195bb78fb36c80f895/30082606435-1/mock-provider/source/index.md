# OpenClaw Source Performance

Generated: 2026-07-24T09:33:36.351Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6501.1ms | 6803.5ms | 6501.0ms | 3282.1ms | 6370.6ms | 43.9ms | 930.4MB | 1.323 |
| skipChannels | gateway, skip channels | 6487.7ms | 6774.4ms | 6487.7ms | 3162.4ms | 3210.7ms | 43.4ms | 896.8MB | 1.329 |
| oneInternalHook | gateway, one configured internal hook | 4745.1ms | 7656.7ms | 4745.4ms | 4657.9ms | 4705.6ms | 45.1ms | 1094.9MB | 1.343 |
| allInternalHooks | gateway, all internal hooks | 6796.9ms | 6935.0ms | 6796.8ms | 4479.4ms | 4525.3ms | 39.4ms | 967.1MB | 1.361 |
| fiftyPlugins | gateway, 50 manifest plugins | 8753.7ms | 9149.1ms | 8753.6ms | 4291.7ms | 4371.7ms | 43.2ms | 1142.2MB | 1.257 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8838.8ms | 9509.1ms | 8838.7ms | 4312.3ms | 4411.0ms | 44.8ms | 1110.2MB | 1.262 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 516.7MB | 470.2MB | ok |
| codex | 512.9MB | 466.4MB | ok |
| teams-meetings | 510.8MB | 464.3MB | ok |
| google-meet | 507.4MB | 460.9MB | ok |
| active-memory | 507.3MB | 460.8MB | ok |
| workboard | 506.3MB | 459.8MB | ok |
| llm-task | 505.6MB | 459.1MB | ok |
| migrate-hermes | 504.8MB | 458.3MB | ok |
| anthropic | 503.3MB | 456.9MB | ok |
| memory-lancedb | 502.7MB | 456.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4154.2ms | 4365.4ms |
| default | post-ready.agent-runtime-plugins.total | 4124.5ms | 4344.0ms |
| default | post-attach.update-check.total | 4120.3ms | 4340.9ms |
| default | post-attach.update-sentinel.total | 4108.5ms | 4331.5ms |
| default | sidecars.restart-sentinel.total | 4107.1ms | 4330.3ms |
| skipChannels | sidecars.session-locks.total | 4360.0ms | 4534.4ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4357.6ms | 4531.8ms |
| skipChannels | post-attach.update-sentinel.total | 4351.8ms | 4525.4ms |
| skipChannels | sidecars.restart-sentinel.total | 4350.4ms | 4523.8ms |
| skipChannels | sidecars.ready.total | 4321.4ms | 4486.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3576.6ms | 3768.1ms |
| oneInternalHook | sidecars.session-locks.total | 3504.1ms | 3504.1ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3502.3ms | 3502.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 3489.1ms | 3489.1ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3487.6ms | 3487.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3421.2ms | 3551.5ms |
| allInternalHooks | sidecars.session-locks.total | 3024.1ms | 3032.3ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3022.4ms | 3030.6ms |
| allInternalHooks | post-attach.update-sentinel.total | 3017.7ms | 3025.9ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3016.7ms | 3024.9ms |
| fiftyPlugins | sidecars.session-locks.total | 5248.7ms | 5368.3ms |
| fiftyPlugins | post-ready.maintenance.total | 5129.1ms | 5274.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5077.6ms | 5234.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4786.7ms | 5020.1ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4784.9ms | 5018.9ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5071.8ms | 5623.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4981.7ms | 5517.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4945.8ms | 5472.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4734.4ms | 5221.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4733.5ms | 5220.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10542.0ms | 0.000 | 2443.4MB | 1051.9MB | -1391.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9681.0ms | 0.207 | 830.8MB | 1053.3MB | 222.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9831.0ms | 0.203 | 805.8MB | 1026.3MB | 220.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3406.1ms | 3544.2ms | 61.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 814.9ms | 817.4ms | 61.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 69.3ms |

## Observations

No data.

