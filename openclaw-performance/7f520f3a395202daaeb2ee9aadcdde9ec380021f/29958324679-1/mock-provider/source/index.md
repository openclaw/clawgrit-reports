# OpenClaw Source Performance

Generated: 2026-07-22T21:19:55.882Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7052.1ms | 8028.0ms | 7052.0ms | 3496.8ms | 6941.2ms | 63.1ms | 980.8MB | 1.370 |
| skipChannels | gateway, skip channels | 7764.2ms | 8694.5ms | 7764.1ms | 3656.8ms | 3706.1ms | 54.0ms | 919.1MB | 1.380 |
| oneInternalHook | gateway, one configured internal hook | 7445.8ms | 8081.4ms | 7445.7ms | 4860.9ms | 4929.5ms | 47.3ms | 950.1MB | 1.361 |
| allInternalHooks | gateway, all internal hooks | 6812.0ms | 7936.9ms | 6811.7ms | 4519.8ms | 4568.3ms | 47.5ms | 940.3MB | 1.304 |
| fiftyPlugins | gateway, 50 manifest plugins | 9017.9ms | 10200.0ms | 9017.8ms | 5444.6ms | 5547.7ms | 46.9ms | 1134.7MB | 1.331 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7088.8ms | 7378.6ms | 7088.8ms | 3921.8ms | 4028.1ms | 40.7ms | 1133.5MB | 1.286 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 579.0MB | 532.6MB | ok |
| zoom-meetings | 576.7MB | 530.2MB | ok |
| workboard | 532.1MB | 485.7MB | ok |
| migrate-hermes | 514.3MB | 467.8MB | ok |
| active-memory | 512.0MB | 465.5MB | ok |
| codex | 510.9MB | 464.4MB | ok |
| teams-meetings | 510.0MB | 463.5MB | ok |
| voice-call | 507.9MB | 461.4MB | ok |
| memory-lancedb | 506.6MB | 460.1MB | ok |
| anthropic | 506.0MB | 459.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4526.4ms | 5047.6ms |
| default | post-ready.agent-runtime-plugins.total | 4498.0ms | 5014.7ms |
| default | post-attach.update-check.total | 4493.6ms | 5008.8ms |
| default | post-attach.update-sentinel.total | 4481.9ms | 4984.3ms |
| default | sidecars.restart-sentinel.total | 4480.5ms | 4982.2ms |
| skipChannels | sidecars.session-locks.total | 5069.4ms | 5599.9ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5067.2ms | 5596.6ms |
| skipChannels | post-attach.update-sentinel.total | 5060.8ms | 5584.3ms |
| skipChannels | sidecars.restart-sentinel.total | 5059.2ms | 5582.8ms |
| skipChannels | sidecars.ready.total | 5029.0ms | 5556.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3632.1ms | 4045.4ms |
| oneInternalHook | sidecars.session-locks.total | 3444.0ms | 3658.6ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3440.6ms | 3651.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 3427.0ms | 3623.3ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3425.5ms | 3620.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3527.3ms | 3832.2ms |
| allInternalHooks | sidecars.session-locks.total | 3503.7ms | 3737.3ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3500.6ms | 3733.6ms |
| allInternalHooks | post-attach.update-sentinel.total | 3490.4ms | 3719.2ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3488.9ms | 3717.7ms |
| fiftyPlugins | sidecars.session-locks.total | 4873.6ms | 5641.3ms |
| fiftyPlugins | post-ready.maintenance.total | 4774.6ms | 5552.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4758.3ms | 5535.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4491.6ms | 5074.2ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4490.2ms | 5072.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 3674.2ms | 3857.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 3594.1ms | 3783.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 3579.7ms | 3770.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 3366.1ms | 3563.5ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 3365.2ms | 3562.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10606.0ms | 0.000 | 2461.1MB | 964.2MB | -1496.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10192.0ms | 0.196 | 863.0MB | 937.7MB | 74.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9935.0ms | 0.201 | 860.8MB | 945.8MB | 85.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3514.5ms | 3548.3ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 831.8ms | 871.3ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 69.2ms |

## Observations

No data.

