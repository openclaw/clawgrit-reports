# OpenClaw Source Performance

Generated: 2026-07-25T21:05:46.129Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6254.9ms | 6281.9ms | 6254.8ms | 3218.9ms | 6116.5ms | 42.1ms | 1053.1MB | 1.306 |
| skipChannels | gateway, skip channels | 6376.5ms | 6376.7ms | 6376.4ms | 3240.4ms | 3282.2ms | 44.5ms | 1008.8MB | 1.255 |
| oneInternalHook | gateway, one configured internal hook | 6873.9ms | 6990.8ms | 6873.8ms | 4687.4ms | 4731.4ms | 43.4ms | 1199.9MB | 1.309 |
| allInternalHooks | gateway, all internal hooks | 6909.8ms | 6942.5ms | 6909.7ms | 4627.6ms | 4674.2ms | 42.9ms | 1172.8MB | 1.303 |
| fiftyPlugins | gateway, 50 manifest plugins | 8717.8ms | 8745.0ms | 8717.7ms | 4530.1ms | 4623.6ms | 44.0ms | 1127.3MB | 1.267 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8430.2ms | 8542.6ms | 8430.2ms | 4178.9ms | 4262.9ms | 42.7ms | 1163.8MB | 1.187 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 536.5MB | 490.0MB | ok |
| google-meet | 534.1MB | 487.6MB | ok |
| codex | 519.4MB | 472.9MB | ok |
| opencode | 516.0MB | 469.5MB | ok |
| teams-meetings | 515.1MB | 468.6MB | ok |
| workboard | 510.7MB | 464.2MB | ok |
| llm-task | 510.5MB | 464.0MB | ok |
| xai | 509.4MB | 462.9MB | ok |
| anthropic | 506.7MB | 460.3MB | ok |
| migrate-hermes | 505.8MB | 459.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3919.6ms | 4014.2ms |
| default | post-ready.agent-runtime-plugins.total | 3894.5ms | 3989.1ms |
| default | post-attach.update-check.total | 3891.9ms | 3986.4ms |
| default | post-attach.update-sentinel.total | 3882.1ms | 3976.4ms |
| default | sidecars.restart-sentinel.total | 3881.0ms | 3975.3ms |
| skipChannels | sidecars.session-locks.total | 4110.4ms | 4118.3ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4100.7ms | 4109.6ms |
| skipChannels | post-attach.update-sentinel.total | 4096.3ms | 4105.4ms |
| skipChannels | sidecars.restart-sentinel.total | 4095.3ms | 4104.4ms |
| skipChannels | sidecars.ready.total | 4082.9ms | 4091.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3525.3ms | 3566.1ms |
| oneInternalHook | sidecars.session-locks.total | 3094.1ms | 3118.3ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3092.5ms | 3116.8ms |
| oneInternalHook | post-attach.update-sentinel.total | 3087.9ms | 3111.9ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3086.9ms | 3110.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3457.3ms | 3478.2ms |
| allInternalHooks | sidecars.session-locks.total | 3104.5ms | 3133.1ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3102.7ms | 3131.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 3098.3ms | 3126.9ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3097.2ms | 3125.9ms |
| fiftyPlugins | sidecars.session-locks.total | 5079.7ms | 5188.5ms |
| fiftyPlugins | post-ready.maintenance.total | 4982.2ms | 5086.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4943.4ms | 5049.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4737.2ms | 4848.8ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4735.9ms | 4847.9ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4903.2ms | 4938.2ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4808.7ms | 4838.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4773.9ms | 4797.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4575.1ms | 4598.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4574.1ms | 4597.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11016.0ms | 0.000 | 2487.4MB | 1070.1MB | -1417.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10596.0ms | 0.189 | 867.8MB | 1051.4MB | 183.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10602.0ms | 0.189 | 885.7MB | 1074.1MB | 188.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3444.4ms | 3510.4ms | 62.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 835.5ms | 843.2ms | 61.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 131.8ms |

## Observations

No data.

