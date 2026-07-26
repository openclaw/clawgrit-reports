# OpenClaw Source Performance

Generated: 2026-07-26T04:29:26.820Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6123.8ms | 6253.9ms | 6123.6ms | 3211.0ms | 6040.8ms | 44.7ms | 1058.3MB | 1.306 |
| skipChannels | gateway, skip channels | 6253.7ms | 6295.1ms | 6253.6ms | 3156.0ms | 3197.1ms | 43.6ms | 1024.0MB | 1.292 |
| oneInternalHook | gateway, one configured internal hook | 6804.0ms | 6883.2ms | 6799.6ms | 4569.7ms | 4610.6ms | 43.4ms | 1179.5MB | 1.310 |
| allInternalHooks | gateway, all internal hooks | 4632.7ms | 6879.6ms | 4632.3ms | 4545.9ms | 4587.5ms | 44.9ms | 1164.4MB | 1.315 |
| fiftyPlugins | gateway, 50 manifest plugins | 8413.2ms | 8445.1ms | 8409.8ms | 4445.9ms | 4523.2ms | 41.6ms | 1125.3MB | 1.205 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8245.6ms | 8338.6ms | 8245.6ms | 4147.2ms | 4231.8ms | 42.2ms | 1128.3MB | 1.214 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| acpx | 538.0MB | 491.6MB | ok |
| opencode | 518.7MB | 472.3MB | ok |
| workboard | 514.1MB | 467.6MB | ok |
| active-memory | 513.1MB | 466.6MB | ok |
| codex | 510.1MB | 463.6MB | ok |
| voice-call | 510.1MB | 463.6MB | ok |
| llm-task | 508.3MB | 461.8MB | ok |
| anthropic | 508.1MB | 461.6MB | ok |
| teams-meetings | 507.8MB | 461.3MB | ok |
| zoom-meetings | 505.7MB | 459.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3911.3ms | 3979.3ms |
| default | post-ready.agent-runtime-plugins.total | 3886.9ms | 3952.2ms |
| default | post-attach.update-check.total | 3884.2ms | 3949.5ms |
| default | post-attach.update-sentinel.total | 3875.4ms | 3940.7ms |
| default | sidecars.restart-sentinel.total | 3874.1ms | 3939.7ms |
| skipChannels | sidecars.session-locks.total | 4029.5ms | 4095.4ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4027.8ms | 4085.8ms |
| skipChannels | post-attach.update-sentinel.total | 4023.5ms | 4081.4ms |
| skipChannels | sidecars.restart-sentinel.total | 4022.5ms | 4080.4ms |
| skipChannels | sidecars.ready.total | 4010.7ms | 4067.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3431.7ms | 3459.7ms |
| oneInternalHook | sidecars.session-locks.total | 3044.9ms | 3081.9ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3039.6ms | 3073.0ms |
| oneInternalHook | post-attach.update-sentinel.total | 3035.3ms | 3068.9ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3034.3ms | 3067.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3417.2ms | 3434.5ms |
| allInternalHooks | sidecars.session-locks.total | 3093.7ms | 3093.7ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3092.0ms | 3092.0ms |
| allInternalHooks | post-attach.update-sentinel.total | 3087.6ms | 3087.6ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3086.6ms | 3086.6ms |
| fiftyPlugins | sidecars.session-locks.total | 4878.6ms | 4882.9ms |
| fiftyPlugins | post-ready.maintenance.total | 4789.3ms | 4794.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4752.5ms | 4761.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4548.4ms | 4567.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4547.4ms | 4566.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4739.4ms | 4797.6ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4652.8ms | 4705.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4619.9ms | 4671.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4420.7ms | 4457.5ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4419.8ms | 4456.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10865.0ms | 0.000 | 2579.1MB | 961.4MB | -1617.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10403.0ms | 0.096 | 865.5MB | 1027.7MB | 162.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10391.0ms | 0.096 | 857.0MB | 1016.5MB | 159.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3404.6ms | 3465.4ms | 61.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 866.1ms | 879.5ms | 61.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 125.0ms |

## Observations

No data.

