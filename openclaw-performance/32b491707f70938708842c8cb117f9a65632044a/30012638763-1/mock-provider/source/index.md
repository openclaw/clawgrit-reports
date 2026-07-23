# OpenClaw Source Performance

Generated: 2026-07-23T13:53:49.140Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8683.4ms | 9114.7ms | 8694.4ms | 4373.3ms | 8550.9ms | 60.0ms | 1003.8MB | 1.317 |
| skipChannels | gateway, skip channels | 7709.2ms | 7858.4ms | 7709.0ms | 3820.2ms | 3880.7ms | 49.2ms | 925.8MB | 1.361 |
| oneInternalHook | gateway, one configured internal hook | 8473.5ms | 8669.6ms | 8473.4ms | 5748.7ms | 5811.7ms | 50.3ms | 1079.5MB | 1.309 |
| allInternalHooks | gateway, all internal hooks | 8856.0ms | 9354.0ms | 8856.0ms | 5884.8ms | 5933.5ms | 52.2ms | 1083.4MB | 1.302 |
| fiftyPlugins | gateway, 50 manifest plugins | 11319.3ms | 13561.5ms | 11319.3ms | 5690.9ms | 5794.1ms | 51.8ms | 1172.9MB | 1.253 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9265.9ms | 12315.1ms | 9265.8ms | 4454.1ms | 4561.4ms | 47.6ms | 1142.6MB | 1.299 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 530.6MB | 484.0MB | ok |
| workboard | 527.2MB | 480.6MB | ok |
| codex | 512.4MB | 465.8MB | ok |
| google-meet | 508.5MB | 461.9MB | ok |
| migrate-hermes | 507.2MB | 460.6MB | ok |
| memory-lancedb | 506.2MB | 459.6MB | ok |
| llm-task | 504.2MB | 457.6MB | ok |
| voice-call | 503.6MB | 457.1MB | ok |
| teams-meetings | 502.3MB | 455.7MB | ok |
| anthropic | 502.2MB | 455.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 5284.1ms | 5773.4ms |
| default | post-ready.agent-runtime-plugins.total | 5258.4ms | 5721.7ms |
| default | post-attach.update-check.total | 5253.9ms | 5713.1ms |
| default | post-attach.update-sentinel.total | 5241.3ms | 5688.9ms |
| default | sidecars.restart-sentinel.total | 5239.7ms | 5686.6ms |
| skipChannels | sidecars.session-locks.total | 4867.0ms | 5066.5ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4863.0ms | 5058.7ms |
| skipChannels | post-attach.update-sentinel.total | 4845.2ms | 5043.9ms |
| skipChannels | sidecars.restart-sentinel.total | 4843.4ms | 5042.4ms |
| skipChannels | sidecars.ready.total | 4821.5ms | 5014.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4324.6ms | 4339.7ms |
| oneInternalHook | sidecars.session-locks.total | 3638.0ms | 3856.8ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3635.1ms | 3854.2ms |
| oneInternalHook | post-attach.update-sentinel.total | 3623.6ms | 3842.9ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3622.3ms | 3841.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4475.3ms | 4612.2ms |
| allInternalHooks | sidecars.session-locks.total | 3851.5ms | 4316.4ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3848.3ms | 4310.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 3836.1ms | 4288.7ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3834.8ms | 4286.5ms |
| fiftyPlugins | sidecars.session-locks.total | 7250.0ms | 8977.9ms |
| fiftyPlugins | post-ready.maintenance.total | 7112.1ms | 8848.1ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 7050.6ms | 8789.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 6348.5ms | 8337.1ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 6346.6ms | 8334.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5422.4ms | 7121.8ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5309.9ms | 7026.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5265.7ms | 6985.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5038.6ms | 6761.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5037.5ms | 6760.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10743.0ms | 0.000 | 2420.0MB | 1030.8MB | -1389.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11774.0ms | 0.255 | 800.7MB | 1023.1MB | 222.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10268.0ms | 0.097 | 871.1MB | 943.4MB | 72.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3866.8ms | 3961.0ms | 60.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 856.4ms | 867.7ms | 60.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 64.6ms |

## Observations

No data.

