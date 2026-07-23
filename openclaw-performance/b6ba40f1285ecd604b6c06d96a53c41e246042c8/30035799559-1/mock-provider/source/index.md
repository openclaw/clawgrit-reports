# OpenClaw Source Performance

Generated: 2026-07-23T19:04:00.819Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7743.5ms | 8482.0ms | 7743.4ms | 3963.5ms | 7609.7ms | 64.9ms | 911.2MB | 1.298 |
| skipChannels | gateway, skip channels | 8191.4ms | 8498.5ms | 8191.3ms | 4142.7ms | 4195.1ms | 54.5ms | 909.3MB | 1.343 |
| oneInternalHook | gateway, one configured internal hook | 9908.6ms | 10439.6ms | 9908.5ms | 6637.2ms | 6699.7ms | 66.8ms | 976.8MB | 1.341 |
| allInternalHooks | gateway, all internal hooks | 10447.3ms | 10606.9ms | 10457.0ms | 6712.0ms | 6775.1ms | 62.7ms | 961.7MB | 1.339 |
| fiftyPlugins | gateway, 50 manifest plugins | 12557.7ms | 13289.5ms | 12546.0ms | 6126.5ms | 6238.4ms | 66.4ms | 1139.7MB | 1.289 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 10417.5ms | 10565.2ms | 10417.0ms | 4831.5ms | 4943.5ms | 53.0ms | 1142.1MB | 1.284 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| voice-call | 511.1MB | 464.9MB | ok |
| migrate-hermes | 508.7MB | 462.5MB | ok |
| llm-task | 508.3MB | 462.1MB | ok |
| codex | 507.1MB | 460.9MB | ok |
| memory-lancedb | 505.2MB | 459.0MB | ok |
| anthropic | 504.2MB | 458.0MB | ok |
| workboard | 503.9MB | 457.7MB | ok |
| active-memory | 503.6MB | 457.4MB | ok |
| google-meet | 503.2MB | 456.9MB | ok |
| teams-meetings | 499.8MB | 453.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4973.3ms | 5142.4ms |
| default | post-ready.agent-runtime-plugins.total | 4960.3ms | 5117.8ms |
| default | post-attach.update-check.total | 4952.8ms | 5113.0ms |
| default | post-attach.update-sentinel.total | 4940.8ms | 5098.2ms |
| default | sidecars.restart-sentinel.total | 4939.1ms | 5096.2ms |
| skipChannels | post-ready.maintenance.total | 5189.5ms | 5189.5ms |
| skipChannels | sidecars.session-locks.total | 5101.2ms | 5154.5ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5098.4ms | 5151.4ms |
| skipChannels | post-attach.update-sentinel.total | 5074.8ms | 5138.0ms |
| skipChannels | sidecars.restart-sentinel.total | 5071.5ms | 5136.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 5078.1ms | 5121.8ms |
| oneInternalHook | sidecars.session-locks.total | 4243.3ms | 4808.4ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 4240.9ms | 4803.8ms |
| oneInternalHook | post-attach.update-sentinel.total | 4226.9ms | 4776.0ms |
| oneInternalHook | sidecars.restart-sentinel.total | 4225.4ms | 4773.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 5105.9ms | 5477.4ms |
| allInternalHooks | sidecars.session-locks.total | 4579.1ms | 4799.9ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 4576.5ms | 4796.1ms |
| allInternalHooks | post-attach.update-sentinel.total | 4556.9ms | 4776.5ms |
| allInternalHooks | sidecars.restart-sentinel.total | 4554.8ms | 4774.3ms |
| fiftyPlugins | sidecars.session-locks.total | 7638.4ms | 8336.3ms |
| fiftyPlugins | post-ready.maintenance.total | 7502.1ms | 8197.9ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 7434.8ms | 8137.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 6942.6ms | 7327.2ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 6941.3ms | 7325.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 6272.8ms | 6289.8ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 6156.6ms | 6180.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 6103.2ms | 6136.2ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5601.8ms | 5850.2ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5600.4ms | 5848.9ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 13435.0ms | 0.000 | 2370.5MB | 962.1MB | -1408.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10431.0ms | 0.192 | 865.9MB | 936.7MB | 70.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 12760.0ms | 0.235 | 797.6MB | 1022.5MB | 224.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4257.7ms | 4345.3ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1016.7ms | 1317.5ms | 61.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 81.2ms |

## Observations

No data.

