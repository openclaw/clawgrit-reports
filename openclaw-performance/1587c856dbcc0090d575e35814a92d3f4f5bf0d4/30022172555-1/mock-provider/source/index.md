# OpenClaw Source Performance

Generated: 2026-07-23T15:56:38.289Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 8177.0ms | 8807.8ms | 8176.9ms | 3900.6ms | 8022.4ms | 54.1ms | 895.4MB | 1.362 |
| skipChannels | gateway, skip channels | 7624.3ms | 8387.6ms | 7608.9ms | 3962.9ms | 4018.3ms | 51.7ms | 940.6MB | 1.320 |
| oneInternalHook | gateway, one configured internal hook | 9337.0ms | 9702.8ms | 9337.0ms | 6302.7ms | 6391.1ms | 55.5ms | 960.4MB | 1.340 |
| allInternalHooks | gateway, all internal hooks | 9162.4ms | 10012.2ms | 9177.8ms | 6005.8ms | 6069.8ms | 57.8ms | 1090.7MB | 1.308 |
| fiftyPlugins | gateway, 50 manifest plugins | 12675.6ms | 12983.2ms | 12675.5ms | 5911.7ms | 6013.6ms | 67.4ms | 1121.3MB | 1.317 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 10424.7ms | 11272.0ms | 10424.7ms | 4577.2ms | 4683.8ms | 47.2ms | 1124.1MB | 1.247 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| workboard | 528.1MB | 481.7MB | ok |
| llm-task | 513.0MB | 466.5MB | ok |
| voice-call | 512.8MB | 466.3MB | ok |
| active-memory | 512.4MB | 466.0MB | ok |
| codex | 511.0MB | 464.5MB | ok |
| zoom-meetings | 508.4MB | 461.9MB | ok |
| memory-lancedb | 506.2MB | 459.7MB | ok |
| anthropic | 506.0MB | 459.5MB | ok |
| migrate-hermes | 505.2MB | 458.7MB | ok |
| xai | 504.2MB | 457.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 5224.1ms | 5636.2ms |
| default | post-ready.agent-runtime-plugins.total | 5213.0ms | 5599.9ms |
| default | post-attach.update-check.total | 5209.2ms | 5593.1ms |
| default | post-attach.update-sentinel.total | 5192.8ms | 5575.6ms |
| default | sidecars.restart-sentinel.total | 5190.6ms | 5574.2ms |
| skipChannels | sidecars.session-locks.total | 4858.0ms | 5351.3ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4855.9ms | 5348.8ms |
| skipChannels | post-attach.update-sentinel.total | 4850.4ms | 5336.7ms |
| skipChannels | sidecars.restart-sentinel.total | 4848.9ms | 5335.1ms |
| skipChannels | sidecars.ready.total | 4821.3ms | 5312.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 4909.1ms | 4963.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3898.1ms | 3930.2ms |
| oneInternalHook | sidecars.session-locks.total | 3896.2ms | 4343.7ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3893.2ms | 4341.1ms |
| oneInternalHook | post-attach.update-sentinel.total | 3877.2ms | 4326.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 4553.6ms | 5095.7ms |
| allInternalHooks | post-ready.maintenance.total | 4131.3ms | 4131.3ms |
| allInternalHooks | sidecars.session-locks.total | 4126.6ms | 4443.9ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 4124.2ms | 4439.4ms |
| allInternalHooks | post-attach.update-sentinel.total | 4111.0ms | 4426.0ms |
| fiftyPlugins | sidecars.session-locks.total | 7498.8ms | 8217.6ms |
| fiftyPlugins | post-ready.maintenance.total | 7375.2ms | 8062.2ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 7324.7ms | 7999.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 7058.1ms | 7227.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 7056.7ms | 7225.8ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 6491.5ms | 7336.2ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 6368.9ms | 7199.9ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 6317.7ms | 7145.1ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5932.8ms | 6672.2ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5931.5ms | 6670.8ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 14614.0ms | 0.000 | 2255.4MB | 1044.4MB | -1211.0MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11061.0ms | 0.181 | 869.2MB | 940.3MB | 71.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11487.0ms | 0.261 | 871.5MB | 943.6MB | 72.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4473.2ms | 4703.2ms | 60.4MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 969.5ms | 1075.5ms | 60.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 79.2ms |

## Observations

No data.

