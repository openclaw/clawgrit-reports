# OpenClaw Source Performance

Generated: 2026-07-24T21:13:39.717Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6930.0ms | 7018.6ms | 6929.9ms | 3583.3ms | 6833.3ms | 44.0ms | 1051.6MB | 1.299 |
| skipChannels | gateway, skip channels | 6734.9ms | 7035.4ms | 6734.6ms | 3349.5ms | 3397.2ms | 45.8ms | 954.6MB | 1.363 |
| oneInternalHook | gateway, one configured internal hook | 5131.0ms | 7591.8ms | 5130.5ms | 5039.8ms | 5090.4ms | 45.7ms | 974.8MB | 1.399 |
| allInternalHooks | gateway, all internal hooks | 7526.3ms | 7821.6ms | 7526.3ms | 4989.3ms | 5042.0ms | 44.3ms | 976.3MB | 1.378 |
| fiftyPlugins | gateway, 50 manifest plugins | 9874.1ms | 10251.8ms | 9874.1ms | 4953.5ms | 5047.3ms | 45.9ms | 1132.6MB | 1.285 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8526.0ms | 9358.8ms | 8526.1ms | 4225.0ms | 4321.1ms | 44.4ms | 1134.8MB | 1.282 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 514.1MB | 467.7MB | ok |
| codex | 513.8MB | 467.4MB | ok |
| anthropic | 512.0MB | 465.5MB | ok |
| active-memory | 510.0MB | 463.6MB | ok |
| migrate-hermes | 509.5MB | 463.0MB | ok |
| workboard | 507.1MB | 460.6MB | ok |
| memory-lancedb | 506.5MB | 460.1MB | ok |
| voice-call | 504.4MB | 457.9MB | ok |
| google-meet | 503.4MB | 456.9MB | ok |
| teams-meetings | 503.0MB | 456.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4381.6ms | 4414.0ms |
| default | post-ready.agent-runtime-plugins.total | 4372.2ms | 4390.9ms |
| default | post-attach.update-check.total | 4369.1ms | 4387.3ms |
| default | post-attach.update-sentinel.total | 4359.5ms | 4377.5ms |
| default | sidecars.restart-sentinel.total | 4358.0ms | 4376.2ms |
| skipChannels | sidecars.session-locks.total | 4292.3ms | 4535.3ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4290.4ms | 4533.1ms |
| skipChannels | post-attach.update-sentinel.total | 4285.1ms | 4527.4ms |
| skipChannels | sidecars.restart-sentinel.total | 4283.7ms | 4525.8ms |
| skipChannels | sidecars.ready.total | 4262.5ms | 4507.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3766.2ms | 3855.1ms |
| oneInternalHook | sidecars.session-locks.total | 3355.7ms | 3355.7ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3353.4ms | 3353.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 3342.5ms | 3342.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3341.4ms | 3341.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3750.4ms | 3965.5ms |
| allInternalHooks | sidecars.session-locks.total | 3453.4ms | 3463.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3451.6ms | 3461.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 3446.1ms | 3456.8ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3444.7ms | 3455.5ms |
| fiftyPlugins | sidecars.session-locks.total | 6079.4ms | 6123.6ms |
| fiftyPlugins | post-ready.maintenance.total | 5968.0ms | 6011.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5925.7ms | 5968.0ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5661.0ms | 5709.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5659.7ms | 5708.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4890.8ms | 5465.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4801.0ms | 5356.7ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4763.7ms | 5311.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4564.9ms | 5086.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4563.8ms | 5085.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10227.0ms | 0.000 | 2484.3MB | 1097.3MB | -1386.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10054.0ms | 0.199 | 869.4MB | 1120.4MB | 251.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9587.0ms | 0.104 | 860.3MB | 1079.4MB | 219.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3237.0ms | 3262.5ms | 61.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 786.6ms | 799.8ms | 62.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 103.0ms |

## Observations

No data.

