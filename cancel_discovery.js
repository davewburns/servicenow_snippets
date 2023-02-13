var statuses = new GlideRecord('discovery_status');
	statuses.addEncodedQuery('stateINStarting');
    // statuses.setLimit('1000')
	statuses.query();
	while (statuses.next()) {
        gs.info(statuses.number)
        var dac =  new SncDiscoveryCancel();
		dac.cancelAll(statuses.sys_id);

    }
