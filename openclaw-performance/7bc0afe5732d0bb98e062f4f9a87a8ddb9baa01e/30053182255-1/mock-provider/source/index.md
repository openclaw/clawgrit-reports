# OpenClaw Source Performance

Generated: 2026-07-23T23:33:12.337Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7182.4ms | 7437.5ms | 7182.3ms | 3628.1ms | 7069.1ms | 55.0ms | 926.3MB | 1.345 |
| skipChannels | gateway, skip channels | 6948.3ms | 7010.0ms | 6580.0ms | 3324.5ms | 3369.9ms | 46.8ms | 897.3MB | 1.295 |
| oneInternalHook | gateway, one configured internal hook | 4784.6ms | 7581.5ms | 4784.0ms | 4703.6ms | 4746.8ms | 41.7ms | 1116.0MB | 1.319 |
| allInternalHooks | gateway, all internal hooks | 7138.1ms | 7356.8ms | 7138.1ms | 4794.4ms | 4856.5ms | 44.1ms | 1117.8MB | 1.288 |
| fiftyPlugins | gateway, 50 manifest plugins | 8890.8ms | 9585.0ms | 8890.7ms | 4497.9ms | 4572.9ms | 46.9ms | 1126.1MB | 1.268 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9683.0ms | 9990.9ms | 9683.0ms | 4339.9ms | 4438.1ms | 43.9ms | 1196.7MB | 1.239 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 532.4MB | 486.0MB | ok |
| codex | 511.5MB | 465.0MB | ok |
| workboard | 508.7MB | 462.2MB | ok |
| llm-task | 508.5MB | 462.1MB | ok |
| teams-meetings | 508.4MB | 462.0MB | ok |
| google-meet | 507.1MB | 460.6MB | ok |
| anthropic | 506.2MB | 459.7MB | ok |
| memory-lancedb | 504.9MB | 458.4MB | ok |
| voice-call | 502.7MB | 456.2MB | ok |
| migrate-hermes | 501.9MB | 455.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4530.8ms | 4597.1ms |
| default | post-ready.agent-runtime-plugins.total | 4490.1ms | 4574.0ms |
| default | post-attach.update-check.total | 4483.7ms | 4570.1ms |
| default | post-attach.update-sentinel.total | 4460.5ms | 4559.1ms |
| default | sidecars.restart-sentinel.total | 4458.7ms | 4557.8ms |
| skipChannels | sidecars.session-locks.total | 4529.5ms | 4559.1ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4527.4ms | 4556.6ms |
| skipChannels | post-attach.update-sentinel.total | 4520.9ms | 4549.0ms |
| skipChannels | sidecars.restart-sentinel.total | 4519.4ms | 4547.5ms |
| skipChannels | sidecars.ready.total | 4494.1ms | 4527.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3565.0ms | 3913.6ms |
| oneInternalHook | sidecars.session-locks.total | 3284.3ms | 3284.3ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3282.6ms | 3282.6ms |
| oneInternalHook | post-attach.update-sentinel.total | 3271.8ms | 3271.8ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3270.6ms | 3270.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3697.9ms | 3763.6ms |
| allInternalHooks | sidecars.session-locks.total | 3070.9ms | 3211.7ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3069.2ms | 3209.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 3058.5ms | 3203.9ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3057.4ms | 3202.5ms |
| fiftyPlugins | sidecars.session-locks.total | 5545.6ms | 5728.5ms |
| fiftyPlugins | post-ready.maintenance.total | 5435.1ms | 5625.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5393.5ms | 5583.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5151.7ms | 5345.2ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5150.5ms | 5343.7ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5405.0ms | 6219.2ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5307.1ms | 6094.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5270.4ms | 6050.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5004.8ms | 5794.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5002.9ms | 5792.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10458.0ms | 0.000 | 2472.0MB | 1069.3MB | -1402.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10394.0ms | 0.192 | 870.4MB | 950.7MB | 80.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10325.0ms | 0.194 | 828.5MB | 1015.8MB | 187.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3622.7ms | 3632.4ms | 61.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 795.1ms | 841.3ms | 61.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 74.2ms |

## Observations

No data.

