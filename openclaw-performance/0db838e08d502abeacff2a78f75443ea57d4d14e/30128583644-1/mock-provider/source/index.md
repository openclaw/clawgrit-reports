# OpenClaw Source Performance

Generated: 2026-07-24T21:48:32.967Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7298.3ms | 7755.3ms | 7298.4ms | 3698.3ms | 7203.1ms | 46.3ms | 920.3MB | 1.323 |
| skipChannels | gateway, skip channels | 6873.7ms | 7482.1ms | 6873.7ms | 3479.9ms | 3527.4ms | 48.3ms | 915.6MB | 1.399 |
| oneInternalHook | gateway, one configured internal hook | 7385.5ms | 7634.7ms | 7385.5ms | 5120.4ms | 5161.6ms | 46.5ms | 1135.2MB | 1.310 |
| allInternalHooks | gateway, all internal hooks | 4884.0ms | 7790.0ms | 4874.9ms | 4791.3ms | 4836.7ms | 49.7ms | 1155.0MB | 1.284 |
| fiftyPlugins | gateway, 50 manifest plugins | 9845.0ms | 9914.4ms | 9845.0ms | 4979.9ms | 5070.1ms | 49.7ms | 1146.9MB | 1.262 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8901.8ms | 9619.8ms | 8901.7ms | 4535.6ms | 4627.6ms | 47.9ms | 1054.0MB | 1.266 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 514.4MB | 467.9MB | ok |
| memory-lancedb | 511.2MB | 464.8MB | ok |
| voice-call | 510.3MB | 463.8MB | ok |
| active-memory | 509.3MB | 462.8MB | ok |
| teams-meetings | 508.3MB | 461.8MB | ok |
| llm-task | 507.7MB | 461.3MB | ok |
| zoom-meetings | 507.5MB | 461.1MB | ok |
| google-meet | 507.4MB | 460.9MB | ok |
| workboard | 507.0MB | 460.6MB | ok |
| migrate-hermes | 506.4MB | 459.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4719.3ms | 4902.1ms |
| default | post-ready.agent-runtime-plugins.total | 4699.6ms | 4888.9ms |
| default | post-attach.update-check.total | 4696.3ms | 4885.8ms |
| default | post-attach.update-sentinel.total | 4686.6ms | 4876.2ms |
| default | sidecars.restart-sentinel.total | 4685.3ms | 4874.8ms |
| skipChannels | sidecars.session-locks.total | 4520.0ms | 4664.2ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4517.6ms | 4662.0ms |
| skipChannels | post-attach.update-sentinel.total | 4507.1ms | 4656.4ms |
| skipChannels | sidecars.restart-sentinel.total | 4505.8ms | 4655.1ms |
| skipChannels | sidecars.ready.total | 4484.1ms | 4632.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3993.8ms | 4007.3ms |
| oneInternalHook | sidecars.session-locks.total | 3235.7ms | 3255.3ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3233.2ms | 3252.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 3223.9ms | 3244.8ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3222.6ms | 3243.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3597.4ms | 3797.2ms |
| allInternalHooks | sidecars.session-locks.total | 3573.8ms | 3573.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3571.8ms | 3571.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 3566.3ms | 3566.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3564.9ms | 3564.9ms |
| fiftyPlugins | sidecars.session-locks.total | 5907.4ms | 5923.3ms |
| fiftyPlugins | post-ready.maintenance.total | 5792.8ms | 5815.0ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5746.8ms | 5767.9ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5466.4ms | 5503.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5465.1ms | 5501.3ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5051.1ms | 5584.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4953.4ms | 5480.0ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4908.6ms | 5437.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4689.4ms | 5205.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4688.4ms | 5204.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10708.0ms | 0.000 | 2514.8MB | 997.6MB | -1517.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10455.0ms | 0.191 | 865.3MB | 1119.9MB | 254.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10121.0ms | 0.099 | 858.1MB | 1080.3MB | 222.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3442.5ms | 3558.8ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 805.4ms | 806.0ms | 61.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 104.7ms |

## Observations

No data.

