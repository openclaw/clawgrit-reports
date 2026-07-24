# OpenClaw Source Performance

Generated: 2026-07-24T00:31:09.853Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6728.4ms | 6748.9ms | 6728.4ms | 3406.8ms | 6599.8ms | 47.9ms | 948.2MB | 1.338 |
| skipChannels | gateway, skip channels | 6931.6ms | 7016.8ms | 6931.5ms | 3371.8ms | 3422.4ms | 46.7ms | 925.7MB | 1.353 |
| oneInternalHook | gateway, one configured internal hook | 7721.6ms | 7880.0ms | 7725.2ms | 5080.8ms | 5129.5ms | 47.1ms | 1117.6MB | 1.353 |
| allInternalHooks | gateway, all internal hooks | 7500.3ms | 7682.9ms | 7500.3ms | 5035.3ms | 5085.0ms | 49.1ms | 945.6MB | 1.373 |
| fiftyPlugins | gateway, 50 manifest plugins | 9546.5ms | 9815.5ms | 9546.5ms | 4733.7ms | 4820.1ms | 47.5ms | 1132.2MB | 1.286 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9265.5ms | 9342.4ms | 9265.4ms | 4323.6ms | 4410.5ms | 48.5ms | 1120.2MB | 1.284 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 512.2MB | 465.7MB | ok |
| codex | 509.4MB | 462.9MB | ok |
| llm-task | 507.5MB | 461.1MB | ok |
| google-meet | 507.4MB | 460.9MB | ok |
| teams-meetings | 507.4MB | 460.9MB | ok |
| workboard | 506.2MB | 459.8MB | ok |
| migrate-hermes | 505.1MB | 458.7MB | ok |
| memory-lancedb | 504.9MB | 458.4MB | ok |
| voice-call | 504.8MB | 458.3MB | ok |
| anthropic | 502.4MB | 456.0MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4195.0ms | 4215.7ms |
| default | post-ready.agent-runtime-plugins.total | 4168.0ms | 4190.9ms |
| default | post-attach.update-check.total | 4164.5ms | 4187.5ms |
| default | post-attach.update-sentinel.total | 4153.9ms | 4176.8ms |
| default | sidecars.restart-sentinel.total | 4152.6ms | 4175.6ms |
| skipChannels | sidecars.session-locks.total | 4472.3ms | 4541.1ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4466.0ms | 4539.2ms |
| skipChannels | post-attach.update-sentinel.total | 4452.7ms | 4534.1ms |
| skipChannels | sidecars.restart-sentinel.total | 4451.4ms | 4532.8ms |
| skipChannels | sidecars.ready.total | 4430.3ms | 4507.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3893.1ms | 3938.5ms |
| oneInternalHook | sidecars.session-locks.total | 3531.4ms | 3544.0ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3529.5ms | 3542.0ms |
| oneInternalHook | post-attach.update-sentinel.total | 3523.3ms | 3535.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3521.9ms | 3533.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3799.6ms | 3879.7ms |
| allInternalHooks | sidecars.session-locks.total | 3428.8ms | 3555.0ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3426.6ms | 3552.4ms |
| allInternalHooks | post-attach.update-sentinel.total | 3414.2ms | 3539.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3412.9ms | 3537.9ms |
| fiftyPlugins | sidecars.session-locks.total | 5677.4ms | 5970.5ms |
| fiftyPlugins | post-ready.maintenance.total | 5571.2ms | 5865.2ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5530.6ms | 5817.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5280.5ms | 5529.2ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5279.3ms | 5527.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5472.9ms | 5505.9ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5371.6ms | 5392.6ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5330.0ms | 5340.3ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5051.1ms | 5055.9ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5049.8ms | 5054.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11136.0ms | 0.000 | 2404.6MB | 1025.9MB | -1378.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10153.0ms | 0.197 | 832.4MB | 1054.9MB | 222.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10499.0ms | 0.190 | 877.6MB | 967.8MB | 90.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3544.9ms | 3626.9ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 813.5ms | 816.3ms | 61.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 69.9ms |

## Observations

No data.

