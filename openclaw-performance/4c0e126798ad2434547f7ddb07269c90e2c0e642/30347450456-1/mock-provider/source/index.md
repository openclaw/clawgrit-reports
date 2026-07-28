# OpenClaw Source Performance

Generated: 2026-07-28T09:47:00.542Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7031.2ms | 8007.1ms | 7030.9ms | 3458.5ms | 6718.9ms | 240.5ms | 1193.5MB | 1.328 |
| skipChannels | gateway, skip channels | 9063.8ms | 9177.1ms | 9063.7ms | 4500.4ms | 4559.6ms | 353.3ms | 1132.7MB | 1.329 |
| oneInternalHook | gateway, one configured internal hook | 10212.6ms | 10892.7ms | 10212.6ms | 6758.3ms | 6813.0ms | 388.5ms | 1293.8MB | 1.377 |
| allInternalHooks | gateway, all internal hooks | 10509.4ms | 10812.4ms | 10578.8ms | 6818.7ms | 6904.8ms | 357.0ms | 1328.2MB | 1.387 |
| fiftyPlugins | gateway, 50 manifest plugins | 15391.7ms | 16251.6ms | 15391.3ms | 7197.1ms | 7301.6ms | 380.9ms | 1206.6MB | 1.299 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9093.9ms | 9623.2ms | 9093.8ms | 4107.5ms | 4204.9ms | 214.0ms | 1200.8MB | 1.275 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 550.6MB | 504.1MB | ok |
| active-memory | 532.6MB | 486.2MB | ok |
| codex | 519.4MB | 473.0MB | ok |
| google-meet | 509.4MB | 462.9MB | ok |
| workboard | 508.0MB | 461.6MB | ok |
| anthropic | 506.6MB | 460.2MB | ok |
| voice-call | 506.3MB | 459.8MB | ok |
| migrate-hermes | 505.9MB | 459.5MB | ok |
| llm-task | 505.1MB | 458.6MB | ok |
| acpx | 505.0MB | 458.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-ready.gateway-handler.channels.total | 4711.6ms | 5238.5ms |
| default | post-ready.gateway-handler.board.total | 4697.8ms | 5224.8ms |
| default | post-ready.gateway-handler.agent-identity.total | 4637.8ms | 5167.6ms |
| default | post-ready.gateway-handler.models-auth-status.total | 4630.7ms | 5160.0ms |
| default | post-ready.gateway-handler.cron.total | 4615.8ms | 5143.6ms |
| skipChannels | post-ready.gateway-handler.channels.total | 6153.5ms | 6225.2ms |
| skipChannels | post-ready.gateway-handler.board.total | 6144.5ms | 6213.9ms |
| skipChannels | post-ready.gateway-handler.agent-identity.total | 6091.1ms | 6142.9ms |
| skipChannels | post-ready.maintenance.total | 6008.8ms | 6017.5ms |
| skipChannels | post-ready.gateway-handler.models-auth-status.total | 5995.1ms | 6132.4ms |
| oneInternalHook | post-ready.gateway-handler.channels.total | 4974.3ms | 5183.1ms |
| oneInternalHook | post-ready.gateway-handler.board.total | 4946.1ms | 5155.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4929.6ms | 5048.2ms |
| oneInternalHook | post-ready.gateway-handler.agent-identity.total | 4898.0ms | 5069.6ms |
| oneInternalHook | post-ready.gateway-handler.models-auth-status.total | 4880.7ms | 5061.5ms |
| allInternalHooks | post-ready.gateway-handler.channels.total | 5073.8ms | 5111.6ms |
| allInternalHooks | post-ready.gateway-handler.board.total | 5053.5ms | 5096.3ms |
| allInternalHooks | post-ready.gateway-handler.agent-identity.total | 4954.8ms | 5016.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4948.7ms | 5029.2ms |
| allInternalHooks | post-ready.gateway-handler.models-auth-status.total | 4944.9ms | 5006.4ms |
| fiftyPlugins | post-ready.gateway-handler.channels.total | 9692.8ms | 10190.7ms |
| fiftyPlugins | post-ready.gateway-handler.board.total | 9663.0ms | 10166.5ms |
| fiftyPlugins | post-ready.gateway-handler.agent-identity.total | 9583.9ms | 10096.8ms |
| fiftyPlugins | post-ready.gateway-handler.models-auth-status.total | 9577.1ms | 10090.0ms |
| fiftyPlugins | post-ready.gateway-handler.cron.total | 9563.2ms | 10075.1ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.channels.total | 5388.2ms | 6153.0ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.board.total | 5375.4ms | 6132.3ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.agent-identity.total | 5323.1ms | 6078.2ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.models-auth-status.total | 5319.5ms | 6073.2ms |
| fiftyStartupLazyPlugins | post-ready.gateway-handler.cron.total | 5309.9ms | 6061.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11799.0ms | 0.000 | 2583.1MB | 1257.0MB | -1326.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10557.0ms | 0.284 | 1018.5MB | 1072.1MB | 53.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10451.0ms | 0.287 | 1060.0MB | 1191.0MB | 131.0MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3635.8ms | 3640.7ms | 187.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 859.5ms | 867.7ms | 187.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 130.5ms |

## Observations

No data.

