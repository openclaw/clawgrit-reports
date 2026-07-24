# OpenClaw Source Performance

Generated: 2026-07-24T18:49:28.652Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8478.2ms | 8870.8ms | 8478.1ms | 4014.9ms | 8310.8ms | 52.4ms | 896.1MB | 1.353 |
| skipChannels | gateway, skip channels | 8338.7ms | 9336.1ms | 8338.6ms | 4025.5ms | 4078.3ms | 58.2ms | 906.5MB | 1.392 |
| oneInternalHook | gateway, one configured internal hook | 11003.2ms | 12316.0ms | 11025.5ms | 7351.0ms | 7426.9ms | 74.7ms | 990.0MB | 1.304 |
| allInternalHooks | gateway, all internal hooks | 8846.7ms | 8898.3ms | 8846.7ms | 5875.7ms | 5937.2ms | 66.7ms | 994.9MB | 1.290 |
| fiftyPlugins | gateway, 50 manifest plugins | 11214.4ms | 11463.0ms | 11214.3ms | 5539.4ms | 5657.0ms | 53.1ms | 1116.6MB | 1.248 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 11142.2ms | 16270.3ms | 11142.3ms | 4810.7ms | 4942.9ms | 48.7ms | 1111.7MB | 1.291 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 512.9MB | 466.4MB | ok |
| llm-task | 512.5MB | 466.0MB | ok |
| voice-call | 510.4MB | 463.9MB | ok |
| workboard | 507.4MB | 460.9MB | ok |
| anthropic | 507.1MB | 460.6MB | ok |
| active-memory | 506.1MB | 459.7MB | ok |
| google-meet | 505.8MB | 459.4MB | ok |
| zoom-meetings | 504.4MB | 457.9MB | ok |
| teams-meetings | 504.3MB | 457.8MB | ok |
| migrate-hermes | 501.2MB | 454.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 5619.4ms | 5643.2ms |
| default | post-ready.agent-runtime-plugins.total | 5591.8ms | 5628.2ms |
| default | post-attach.update-check.total | 5587.3ms | 5622.9ms |
| default | post-attach.update-sentinel.total | 5576.1ms | 5606.6ms |
| default | sidecars.restart-sentinel.total | 5574.6ms | 5605.0ms |
| skipChannels | sidecars.session-locks.total | 5363.5ms | 6086.6ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5359.7ms | 6077.3ms |
| skipChannels | post-attach.update-sentinel.total | 5348.3ms | 6062.3ms |
| skipChannels | sidecars.restart-sentinel.total | 5345.9ms | 6060.6ms |
| skipChannels | sidecars.ready.total | 5309.9ms | 6031.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 5646.8ms | 6036.4ms |
| oneInternalHook | sidecars.session-locks.total | 4836.2ms | 5190.8ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 4832.6ms | 5188.0ms |
| oneInternalHook | post-attach.update-sentinel.total | 4811.0ms | 5171.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 4809.2ms | 5170.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4350.3ms | 4552.2ms |
| allInternalHooks | sidecars.session-locks.total | 3861.6ms | 4063.5ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3859.3ms | 4057.3ms |
| allInternalHooks | post-attach.update-sentinel.total | 3846.0ms | 4042.4ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3844.6ms | 4040.7ms |
| fiftyPlugins | sidecars.session-locks.total | 6744.4ms | 6975.0ms |
| fiftyPlugins | post-ready.maintenance.total | 6614.5ms | 6860.6ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 6561.2ms | 6813.9ms |
| fiftyPlugins | post-attach.update-sentinel.total | 6223.4ms | 6496.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 6222.3ms | 6495.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 7050.0ms | 10294.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 6923.7ms | 8901.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 6864.0ms | 10267.6ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 6243.2ms | 8814.1ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 6241.1ms | 8811.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12102.0ms | 0.000 | 2383.5MB | 1079.9MB | -1303.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10597.0ms | 0.283 | 841.3MB | 1060.6MB | 219.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11265.0ms | 0.178 | 884.2MB | 953.4MB | 69.2MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3617.6ms | 3940.0ms | 61.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 917.1ms | 953.6ms | 60.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 80.5ms |

## Observations

No data.

