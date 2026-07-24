# OpenClaw Source Performance

Generated: 2026-07-24T21:04:34.428Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7669.9ms | 8918.1ms | 7669.7ms | 3949.0ms | 7560.9ms | 48.8ms | 1057.5MB | 1.334 |
| skipChannels | gateway, skip channels | 7861.5ms | 8110.5ms | 7861.5ms | 4189.3ms | 4245.1ms | 53.5ms | 981.6MB | 1.356 |
| oneInternalHook | gateway, one configured internal hook | 7516.3ms | 8094.3ms | 7516.3ms | 5148.1ms | 5203.9ms | 48.6ms | 1132.0MB | 1.330 |
| allInternalHooks | gateway, all internal hooks | 7642.7ms | 7891.7ms | 7642.7ms | 5123.8ms | 5183.0ms | 47.3ms | 982.7MB | 1.384 |
| fiftyPlugins | gateway, 50 manifest plugins | 8956.9ms | 9851.8ms | 8957.0ms | 4837.4ms | 4926.1ms | 46.4ms | 1120.7MB | 1.320 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8392.9ms | 9540.5ms | 8392.9ms | 4175.0ms | 4262.2ms | 41.0ms | 1152.8MB | 1.258 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 521.3MB | 474.8MB | ok |
| zoom-meetings | 515.1MB | 468.7MB | ok |
| xai | 512.3MB | 465.8MB | ok |
| active-memory | 512.2MB | 465.7MB | ok |
| codex | 510.3MB | 463.8MB | ok |
| llm-task | 509.7MB | 463.2MB | ok |
| voice-call | 509.7MB | 463.2MB | ok |
| migrate-hermes | 507.3MB | 460.9MB | ok |
| teams-meetings | 506.5MB | 460.0MB | ok |
| anthropic | 505.7MB | 459.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4861.8ms | 6318.9ms |
| default | post-ready.agent-runtime-plugins.total | 4840.6ms | 6287.2ms |
| default | post-attach.update-check.total | 4837.7ms | 6281.8ms |
| default | post-attach.update-sentinel.total | 4828.5ms | 6265.9ms |
| default | sidecars.restart-sentinel.total | 4827.2ms | 6264.1ms |
| skipChannels | sidecars.session-locks.total | 5031.5ms | 5035.1ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5025.4ms | 5032.9ms |
| skipChannels | post-attach.update-sentinel.total | 5006.8ms | 5021.7ms |
| skipChannels | sidecars.restart-sentinel.total | 5004.8ms | 5020.3ms |
| skipChannels | sidecars.ready.total | 4980.3ms | 4995.9ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3807.4ms | 4145.1ms |
| oneInternalHook | sidecars.session-locks.total | 3296.9ms | 3543.6ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3295.3ms | 3541.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 3286.8ms | 3535.4ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3285.9ms | 3534.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3773.4ms | 3839.1ms |
| allInternalHooks | sidecars.session-locks.total | 3635.6ms | 3858.9ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3633.4ms | 3856.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 3622.4ms | 3847.4ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3621.2ms | 3846.4ms |
| fiftyPlugins | sidecars.session-locks.total | 5069.7ms | 5848.9ms |
| fiftyPlugins | post-ready.maintenance.total | 4974.1ms | 5732.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4937.4ms | 5685.9ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4731.6ms | 5437.9ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4730.6ms | 5436.5ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4815.8ms | 5891.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4724.1ms | 5799.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4688.3ms | 5763.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4484.6ms | 5557.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4483.6ms | 5556.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10137.0ms | 0.000 | 2435.6MB | 1098.6MB | -1337.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9641.0ms | 0.207 | 847.8MB | 1074.6MB | 226.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9955.0ms | 0.201 | 834.9MB | 1073.8MB | 238.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3600.3ms | 3774.4ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 818.9ms | 852.9ms | 61.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 107.4ms |

## Observations

No data.

