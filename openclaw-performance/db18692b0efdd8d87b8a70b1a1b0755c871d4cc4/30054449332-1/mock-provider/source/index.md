# OpenClaw Source Performance

Generated: 2026-07-23T23:57:36.885Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5721.4ms | 5793.4ms | 5721.3ms | 2877.5ms | 5657.6ms | 43.4ms | 923.3MB | 1.226 |
| skipChannels | gateway, skip channels | 3019.2ms | 3027.9ms | 3018.8ms | 2948.5ms | 2986.4ms | 41.4ms | 774.8MB | 1.352 |
| oneInternalHook | gateway, one configured internal hook | 4355.5ms | 6607.7ms | 4355.6ms | 4257.6ms | 4298.8ms | 45.4ms | 946.5MB | 1.378 |
| allInternalHooks | gateway, all internal hooks | 4463.7ms | 6727.0ms | 4463.6ms | 4386.3ms | 4427.8ms | 43.1ms | 954.4MB | 1.344 |
| fiftyPlugins | gateway, 50 manifest plugins | 8130.0ms | 8147.7ms | 8129.9ms | 4065.3ms | 4141.5ms | 44.4ms | 1133.1MB | 1.247 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8137.7ms | 8156.1ms | 8137.6ms | 3868.1ms | 3950.7ms | 43.1ms | 1140.0MB | 1.265 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 520.1MB | 474.0MB | ok |
| active-memory | 510.4MB | 464.3MB | ok |
| codex | 509.1MB | 463.0MB | ok |
| zoom-meetings | 508.4MB | 462.3MB | ok |
| anthropic | 507.0MB | 460.9MB | ok |
| teams-meetings | 505.7MB | 459.7MB | ok |
| workboard | 505.4MB | 459.3MB | ok |
| voice-call | 505.0MB | 458.9MB | ok |
| migrate-hermes | 503.9MB | 457.8MB | ok |
| llm-task | 501.8MB | 455.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3617.4ms | 3669.6ms |
| default | post-ready.agent-runtime-plugins.total | 3608.5ms | 3661.6ms |
| default | post-attach.update-check.total | 3606.1ms | 3659.3ms |
| default | post-attach.update-sentinel.total | 3598.0ms | 3651.4ms |
| default | sidecars.restart-sentinel.total | 3596.9ms | 3650.2ms |
| skipChannels | sidecars.internal-hooks.total | 924.0ms | 932.2ms |
| skipChannels | post-attach.update-check.total | 862.8ms | 866.8ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 858.7ms | 864.0ms |
| skipChannels | ready.total | 847.2ms | 848.7ms |
| skipChannels | runtime.post-attach.total | 845.9ms | 847.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3260.1ms | 3283.4ms |
| oneInternalHook | sidecars.session-locks.total | 3004.3ms | 3004.3ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3002.9ms | 3002.9ms |
| oneInternalHook | post-attach.update-sentinel.total | 2998.4ms | 2998.4ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2997.4ms | 2997.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3373.7ms | 3390.4ms |
| allInternalHooks | sidecars.session-locks.total | 2998.8ms | 2998.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2997.2ms | 2997.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 2992.7ms | 2992.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2991.8ms | 2991.8ms |
| fiftyPlugins | sidecars.session-locks.total | 4743.4ms | 4790.8ms |
| fiftyPlugins | post-ready.maintenance.total | 4653.8ms | 4686.0ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4616.9ms | 4646.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4412.9ms | 4439.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4412.0ms | 4438.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4654.9ms | 4853.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4563.3ms | 4760.9ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4525.9ms | 4725.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4324.2ms | 4450.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4323.3ms | 4449.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11200.0ms | 0.000 | 2493.3MB | 959.8MB | -1533.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10613.0ms | 0.188 | 872.5MB | 952.2MB | 79.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10713.0ms | 0.187 | 838.8MB | 1048.9MB | 210.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3926.4ms | 3942.9ms | 61.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 920.5ms | 924.1ms | 61.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 80.7ms |

## Observations

No data.

