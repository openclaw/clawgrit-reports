# OpenClaw Source Performance

Generated: 2026-07-22T09:06:04.344Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6660.0ms | 7522.1ms | 6655.5ms | 3308.6ms | 6528.6ms | 47.7ms | 978.7MB | 1.329 |
| skipChannels | gateway, skip channels | 7043.7ms | 7070.5ms | 7043.6ms | 3448.4ms | 3512.6ms | 50.0ms | 898.6MB | 1.278 |
| oneInternalHook | gateway, one configured internal hook | 7333.5ms | 8666.4ms | 7333.6ms | 4738.2ms | 4821.7ms | 50.8ms | 967.6MB | 1.269 |
| allInternalHooks | gateway, all internal hooks | 7712.8ms | 8194.1ms | 7712.6ms | 4942.9ms | 4987.9ms | 49.6ms | 936.2MB | 1.329 |
| fiftyPlugins | gateway, 50 manifest plugins | 10273.5ms | 13867.3ms | 10273.4ms | 5812.3ms | 5914.4ms | 55.7ms | 1147.7MB | 1.305 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9175.2ms | 9705.0ms | 9175.2ms | 5276.5ms | 5396.8ms | 58.6ms | 1133.5MB | 1.340 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 530.8MB | 484.2MB | ok |
| active-memory | 514.4MB | 467.8MB | ok |
| teams-meetings | 510.0MB | 463.4MB | ok |
| workboard | 509.4MB | 462.8MB | ok |
| codex | 509.2MB | 462.6MB | ok |
| anthropic | 506.3MB | 459.7MB | ok |
| google-meet | 505.2MB | 458.6MB | ok |
| memory-lancedb | 504.3MB | 457.7MB | ok |
| zoom-meetings | 503.2MB | 456.6MB | ok |
| migrate-hermes | 503.2MB | 456.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4322.1ms | 4579.6ms |
| default | post-ready.agent-runtime-plugins.total | 4299.2ms | 4559.6ms |
| default | post-attach.update-check.total | 4295.9ms | 4556.7ms |
| default | post-attach.update-sentinel.total | 4285.9ms | 4547.9ms |
| default | sidecars.restart-sentinel.total | 4284.6ms | 4546.7ms |
| skipChannels | sidecars.session-locks.total | 4209.6ms | 4593.2ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4207.7ms | 4589.4ms |
| skipChannels | post-attach.update-sentinel.total | 4203.1ms | 4574.8ms |
| skipChannels | sidecars.restart-sentinel.total | 4202.0ms | 4573.6ms |
| skipChannels | sidecars.ready.total | 4186.0ms | 4555.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3638.3ms | 3851.2ms |
| oneInternalHook | sidecars.session-locks.total | 3379.5ms | 4413.4ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3376.7ms | 4409.2ms |
| oneInternalHook | post-attach.update-sentinel.total | 3371.2ms | 4391.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3370.0ms | 4389.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3768.5ms | 3772.5ms |
| allInternalHooks | sidecars.session-locks.total | 3553.6ms | 4038.5ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3547.8ms | 4033.9ms |
| allInternalHooks | post-attach.update-sentinel.total | 3528.6ms | 4013.2ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3526.3ms | 4011.4ms |
| fiftyPlugins | sidecars.session-locks.total | 5556.1ms | 8657.6ms |
| fiftyPlugins | post-ready.maintenance.total | 5457.7ms | 8549.2ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5440.6ms | 8532.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4599.9ms | 7842.2ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4598.3ms | 7839.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4859.8ms | 4985.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4769.8ms | 4874.9ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4754.7ms | 4855.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4393.2ms | 4484.0ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4391.8ms | 4482.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13757.0ms | 0.000 | 2452.8MB | 961.6MB | -1491.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11215.0ms | 0.178 | 862.6MB | 937.6MB | 75.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12718.0ms | 0.157 | 850.5MB | 931.5MB | 81.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4193.9ms | 4401.2ms | 60.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1046.8ms | 1048.3ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.1ms | 96.7ms |

## Observations

No data.

